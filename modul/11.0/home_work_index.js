import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './img-api';
import { renderImages, initializeLightbox } from './gallery-utils';

const form = document.querySelector('form#search-form');
const gallery = document.querySelector('div.gallery');
const loadMoreButton = document.querySelector('button.load-more');
let lightbox;
let allImagesLoaded = false;
let page = 1;

async function onSubmit(evt) {
  evt.preventDefault();
  page = 1; // Зброїмо значення змінної page при новому запиті
  loadMoreButton.classList.add('hidden');
  gallery.innerHTML = '';
  const searchQuery = evt.currentTarget.elements.searchQuery.value.trim();

  if (searchQuery === '') {
    Notify.info('Будь ласка, введіть запит!');
    return;
  }

  try {
    const data = await fetchImages(searchQuery, page);
    let queriesArray = data.hits;

    if (queriesArray.length === 0) {
      Notify.failure(
        'Вибачте, за вашим запитом зображень не знайдено. Спробуйте ще раз.'
      );
    } else {
      renderImages(queriesArray);
      Notify.success(`Ура! Ми знайшли ${data.totalHits} зображень.`);
      loadMoreButton.classList.toggle('hidden', queriesArray.length < 40);
      allImagesLoaded = queriesArray.length < 40;
      initializeLightbox();
    }
  } catch (error) {
    Notify.info('Вибачте, але ви дійшли до кінця результатів пошуку.');
  }
}

async function onLoadMore() {
  try {
    if (allImagesLoaded) {
      return;
    }
    page++;
    const data = await fetchImages(form.elements.searchQuery.value.trim(), page);
    let queriesArray = data.hits;
    renderImages(queriesArray);
    loadMoreButton.classList.toggle('hidden', queriesArray.length < 40);
    allImagesLoaded = queriesArray.length < 40;
    initializeLightbox();
  } catch (error) {
    throw error;
  }
}

form.addEventListener('submit', onSubmit);
loadMoreButton.addEventListener('click', onLoadMore);
