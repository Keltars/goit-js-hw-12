import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/?';
const API_KEY = '43811206-00759c8a8797fc9712cd71957';

export const fetchImages = async (searchValue, page, limit) => {
  const params = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    q: `${searchValue}`,
    safesearch: true,
    page: page,
    per_page: limit,
  });
  const response = await axios.get(`${BASE_URL}${params}`);
  return response.data;
};
