import vento from "https://cdn.jsdelivr.net/npm/ventojs@2.3.0/web.js";

const env = vento({
  includes: new URL(import.meta.resolve("./templates")),
});

const { slides } = await (await fetch("./data.json")).json();
const index = Math.floor(Math.random() * slides.length);
const slide = slides[index];
const template = slide.type === "tweet" ? "tweet.vto" : "visual.vto";

const result = await env.run(template, slide);
document.getElementById("main").innerHTML = result.content;
