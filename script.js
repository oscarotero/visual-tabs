import art from "./templates/art.js";
import tweet from "./templates/tweet.js";
import visual from "./templates/visual.js";

const templates = { art, tweet, visual };
const baseUrl = new URL("https://cdn.jsdelivr.net/gh/oscarotero/visual-tabs/");

function fullUrl(path) {
  return new URL("." + path, baseUrl).href;
}

const { slides } = await (await fetch(fullUrl("/data.json"))).json();
const index = Math.floor(Math.random() * slides.length);
const slide = slides[index];
const template = templates[slide.type];

const result = template({ ...slide, fullUrl });
document.getElementById("main").innerHTML = result;
