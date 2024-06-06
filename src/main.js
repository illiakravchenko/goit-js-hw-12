// import libraries
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// import function
import { getImages } from './js/pixabay-api';
import { renderImgs } from './js/render-functions';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

function hideLoader() {
  loader.style.display = 'none';
}

function showLoader() {
  loader.style.display = 'block';
}
hideLoader();
form.addEventListener('submit', getQuery);

function getQuery(event) {
  event.preventDefault();
  showLoader();
  gallery.innerHTML = '';
  const query = event.target.elements.input.value.trim();

  if (!query) {
    hideLoader();
    iziToast.error({
      message: 'Please enter Query',
      position: 'topRight',
    });
    return;
  }
  getImages(query)
    .then(data => {
      if (data.hits.length === 0) {
        hideLoader();
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      const markup = renderImgs(data.hits);
      gallery.insertAdjacentHTML('beforeend', markup);
      iziToast.success({
        message:
          'Wow, there are many images matching your search query. Keep going!',
        position: 'topRight',
      });
      lightbox.refresh();
      hideLoader();
    })
    .catch(error => {
      console.log(error);
      hideLoader();
    });
  form.reset();
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
