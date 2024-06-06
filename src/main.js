// import libraries
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// import function
import { getImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const button = document.querySelector('.load-button');

let searchQuery;
let currentPage = 1;
let maxPage = 0;

const perPage = 15;

function hideLoader() {
  loader.style.display = 'none';
}

function showLoader() {
  loader.style.display = 'block';
}
function hideBtn() {
  button.style.display = 'none';
}

function showBtn() {
  button.style.display = 'block';
}
hideLoader();
hideBtn();
form.addEventListener('submit', getQuery);
button.addEventListener('click', moreImg);

async function getQuery(event) {
  event.preventDefault();
  showLoader();
  searchQuery = event.target.elements.input.value.trim();
  gallery.innerHTML = '';
  currentPage = 1;

  if (!searchQuery) {
    hideLoader();
    hideBtn();
    iziToast.error({
      message: 'Please enter Query',
      position: 'topRight',
    });
    return;
  }

  try {
    const data = await getImages(searchQuery, currentPage);
    console.log(data);
    if (data.hits.length === 0) {
      hideLoader();
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    maxPage = Math.ceil(data.totalHits / perPage);
    renderGallery(data.hits);
  } catch (error) {
    console.log(error);
  }
  iziToast.success({
    message:
      'Wow, there are many images matching your search query. Keep going!',
    position: 'topRight',
  });
  hideLoader();
  checkPage();
  form.reset();
}

async function moreImg() {
  currentPage += 1;
  showLoader();
  try {
    const data = await getImages(searchQuery, currentPage);
    renderGallery(data.hits);
  } catch (error) {
    console.log(error);
  }
  hideLoader();
  checkPage();
  scrollDown();
}

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function checkPage() {
  if (currentPage >= maxPage) {
    hideBtn();
    iziToast.warning({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  } else {
    showBtn();
  }
}

function scrollDown() {
  const height = gallery.firstChild.getBoundingClientRect().height;
  scrollBy({
    top: height,
    behavior: 'smooth',
  });
}
