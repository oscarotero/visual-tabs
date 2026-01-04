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
            <a href="${url}" title="Info - ${source}">
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="iconTitle">
                      <title id="iconTitle">Info</title>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3792 59.807V21.3792H58.807V36.6624C59.3659 36.6246 59.9282 36.5989 60.4966 36.5989C61.065 36.5989 61.6273 36.6246 62.1862 36.6624V18H17V63.1862H35.6401C35.6036 62.634 35.5786 62.0785 35.5786 61.5169C35.5786 60.9417 35.605 60.3727 35.6435 59.807H20.3792ZM26.8205 30.4191H52.9881V27.0399H26.8205V30.4191ZM26.8205 45.7004H41.2421C42.2538 44.4697 43.3818 43.3383 44.6091 42.3212H26.8205V45.7004ZM26.8205 53.3413H36.958C37.3635 52.1728 37.8535 51.0442 38.4205 49.9622H26.8205V53.3413ZM52.9881 37.7526V34.6809H26.8205V38.0601H52.0798C52.3805 37.9519 52.6826 37.8485 52.9881 37.7526ZM60.5175 40.9925C49.2115 40.9925 40.0141 50.1913 40.0141 61.4966C40.0141 72.8026 49.2115 82 60.5175 82C71.8235 82 81.0209 72.8026 81.0209 61.4966C81.0209 50.1913 71.8235 40.9925 60.5175 40.9925ZM60.5175 78.6208C51.0748 78.6208 43.3933 70.9393 43.3933 61.4966C43.3933 52.0545 51.0748 44.3717 60.5175 44.3717C69.9596 44.3717 77.6418 52.0545 77.6418 61.4966C77.6418 70.9393 69.9596 78.6208 60.5175 78.6208ZM58.9314 70.352H62.3105V58.5256H58.9314V70.352ZM58.9314 54.6923H62.3105V50.9232H58.9314V54.6923Z" fill="currentColor" />
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
