import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38650686-211065fda926dbe73f41f5be1';
const searchParams = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 40,
};

export async function fetchImages(searchQuery, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        ...searchParams,
        page,
      },
    });
    return response.data;
  } catch (error) {
    Notify.failure('Не вдалося завантажити зображення. Спробуйте ще раз пізніше.');
    throw error;
  }
}
