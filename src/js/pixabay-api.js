import axios from 'axios';

export async function getImages(query, currentPage) {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    key: '44148466-3c6c137c0d8e86e77772167ae',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: currentPage,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
