import SimpleLightbox from 'simplelightbox';
export function renderImages(queriesArray) {
  // ... ваш код функції renderImages
  let markup = '';

  queriesArray.forEach(item => {
    markup += `<a href="${item.largeImageURL}" class="lightbox-target">
        <div class="photo-card">
        <div class="thumb"><img src="${item.webformatURL}" alt="${item.tags}" loading="lazy" /></div>
          <div class="info">
            <p class="info-item">
              <b>Likes</b><span>${item.likes}</span>
            </p>
            <p class="info-item">
              <b>Views</b><span>${item.views}</span>
            </p>
            <p class="info-item">
              <b>Comments</b><span>${item.comments}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b><span>${item.downloads}</span>
            </p>
          </div>
        </div>
        </a>`;
  });
  gallery.insertAdjacentHTML('beforeend', markup);
}

export function initializeLightbox() {
  // ... ваш код функції initializeLightbox
  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.lightbox-target');
  }
}
