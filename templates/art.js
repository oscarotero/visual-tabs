export default function ({ title, author, year, image, source, url, fullUrl }) {
  return (`
<article>
  <div class="content">
    <div class="slide-card">
      <!-- Content -->
      <div class="overlay"></div>
      <img class="bgcover" src="${fullUrl(image)}" alt="">
      <div class="slide-content">
        <div class="text">
          <h1>${title}</h1>
          <p>${author} <span>${year}</span>
          </p>
        </div>
        <div class="cta">
          <p>
            <a href="${url}" title="${source}">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-labelledby="icon-title">
                <title id="icon-title">${source}</title>
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</article>
  `);
}
