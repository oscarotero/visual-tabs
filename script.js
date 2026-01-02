import vento from "https://cdn.jsdelivr.net/npm/ventojs@2.3.0/web.js";

const baseUrl = new URL("https://cdn.jsdelivr.net/gh/oscarotero/visual-tabs/");

const env = vento({
  includes: new URL("templates/", baseUrl),
});

env.filters.fullUrl = (path) => new URL("." + path, baseUrl).href;

const { slides } = await (await fetch(new URL("data.json", baseUrl))).json();
const index = Math.floor(Math.random() * slides.length);
const slide = slides[index];
const template = `${slide.type}.vto`;

const result = await env.run(template, slide);
document.getElementById("main").innerHTML = result.content;
