const BASE_URL = 'https://pixabay.com/api/?key=';
const API_KEY = '43811206-00759c8a8797fc9712cd71957';

export const fetchImages = searchValue => {
  return fetch(
    `${BASE_URL}${API_KEY}&image_type=photo&orientation=horizontal&q=${searchValue}&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      return response.json();
    }
  });
};
