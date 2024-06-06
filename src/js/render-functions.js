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
        <ul>
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
