export default function ({ title, image, fullUrl }) {
  return (`
<article>
  <div class="content">
    <img class="slide" src="${fullUrl(image)}" alt="${title}">
  </div>
  <footer class="footer">
    <div class="footer-logo">
      <img src="${fullUrl("/img/sapiare-logo.svg")}" alt="Sapiare Logo">
    </div>
    <h1 class="footer-title">${title}</h1>
  </footer>
</article>
  `);
}
