const gallery = document.querySelector('.gallery');
import { lightbox } from '../main';

function renderImage({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="cards">
      <a href="${webformatURL}">
        <img src="${largeImageURL}" alt="${tags}">
      </a>
      <div>
        <ul class="cards-info">
          <li>
            <p>likes:</p>
            <p>${likes}</p>
          </li>
          <li>
            <p>views</p>
            <p>${views}</p>
          </li>
          <li>
            <p>comments</p>
            <p>${comments}</p>
          </li>
          <li>
            <p>downloads</p>
            <p>${downloads}</p>
          </li>
        </ul>
      </div>

    </li>`;
}

export function renderImgs(array) {
  return array.map(renderImage).join('');
}
export function renderGallery(arr) {
  const markup = renderImgs(arr);
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
