import art from "./templates/art.js";
import tweet from "./templates/tweet.js";
import visual from "./templates/visual.js";

const templates = { art, tweet, visual };
const baseUrl = new URL(
  "https://cdn.jsdelivr.net/gh/oscarotero/visual-tabs/content/"
);
const cacheDuration = 24 * 60 * 60 * 1000; // 24 hours

function fullUrl(path) {
  return new URL("." + path, baseUrl).href;
}

// --------------------
// Fetch + render slide
// --------------------
const { slides } = await fetchSlides();
const index = Math.floor(Math.random() * slides.length);
const slide = slides[index];
const template = templates[slide.type];

const result = template({ ...slide, fullUrl });
document.getElementById("main").innerHTML = result;

// --------------------
// Reload logic (selection-safe)
// --------------------
let isSelecting = false;

document.addEventListener("selectionchange", () => {
  const selection = window.getSelection();
  isSelecting = !!selection && selection.toString().length > 0;
});

document.body.addEventListener("click", () => {
  if (!isSelecting) {
    location.reload();
  }
});

// --------------------
// Copy ANY selected text
// --------------------
document.addEventListener("mouseup", async () => {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return;

  const text = selection.toString().trim();
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    showCopiedToast();
  } catch (err) {
    console.warn("Clipboard copy failed", err);
  }
});

// --------------------
// Copied toast UI
// --------------------
function showCopiedToast() {
  const toast = document.createElement("div");
  toast.textContent = "Copied!";

  Object.assign(toast.style, {
    position: "fixed",
    bottom: "24px",
    left: "50%",
    transform: "translateX(-50%)",
    maxWidth: "80%",
    padding: "10px 14px",
    fontSize: "14px",
    lineHeight: "1.4",
    color: "#fff",
    background: "rgba(0,0,0,0.85)",
    borderRadius: "8px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    zIndex: 9999,
    pointerEvents: "none",
    opacity: "0",
    transition: "opacity 150ms ease",
  });

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = "1";
  });

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 200);
  }, 1200);
}

// --------------------
// Cache helpers
// --------------------
function getCache() {
  const json = localStorage.getItem("slides");
  if (json) {
    try {
      const slides = JSON.parse(json);
      if (Date.now() - slides.storedAt < cacheDuration) {
        return slides.data;
      }
    } catch {
      // ignore corrupted cache
    }
  }
}

function setCache(data) {
  localStorage.setItem(
    "slides",
    JSON.stringify({
      storedAt: Date.now(),
      data,
    })
  );
}

async function fetchSlides() {
  const cached = getCache();
  if (cached) return cached;

  const response = await fetch(fullUrl("/data.json"));
  const data = await response.json();
  setCache(data);
  return data;
}
