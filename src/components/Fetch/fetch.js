import axios from 'axios';
import PropTypes from 'prop-types';

// const BASE_URL = 'https://pixabay.com/api/';
// const BASE_KEY = '31379627-912f0dd2a6189315a3f000bf9';

export const fetchImage = async (value, pageNumber) => {
  const BASE_KEY = `31379627-912f0dd2a6189315a3f000bf9`;
  const searchParams = new URLSearchParams({
    key: BASE_KEY,
    q: `${value}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page: pageNumber,
  });

  const url = `https://pixabay.com/api/?${searchParams}`;
  const response = await axios.get(url);
  if (!response.data.hits.length) {
    throw new Error(`No photos`);
  }
  return response.data;
};

fetchImage.propTypes = {
  value: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
};
