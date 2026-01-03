import art from "./templates/art.js";
import tweet from "./templates/tweet.js";
import visual from "./templates/visual.js";

const templates = { art, tweet, visual };
const baseUrl = new URL("https://cdn.jsdelivr.net/gh/oscarotero/visual-tabs/");
const cacheDuration = 24 * 60 * 60 * 1000; // 1 day

function fullUrl(path) {
  return new URL("." + path, baseUrl).href;
}

const { slides } = await fetchSlides();
const index = Math.floor(Math.random() * slides.length);
const slide = slides[index];
const template = templates[slide.type];

const result = template({ ...slide, fullUrl });
document.getElementById("main").innerHTML = result;

document.body.addEventListener("click", () => location.reload());

function getCache() {
  const json = localStorage.getItem("slides");
  if (json) {
    try {
      const slides = JSON.parse(json);
      const storedAt = slides.storedAt;
      if (Date.now() - storedAt < cacheDuration) {
        return slides.data;
      }
    } catch {
      // ignore
    }
  }
}
function setCache(data) {
  const toStore = {
    storedAt: Date.now(),
    data,
  };
  localStorage.setItem("slides", JSON.stringify(toStore));
}

async function fetchSlides() {
  const cached = getCache();
  if (cached) {
    return cached;
  }
  const response = await fetch(fullUrl("/data.json"));
  const data = await response.json();
  setCache(data);
  return data;
}
