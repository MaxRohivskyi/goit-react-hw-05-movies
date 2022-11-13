import axios from 'axios';

const API_KEY = '0914d39eb3001af3cbf4eab1bcce1db8';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchMoviesById = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchCastsById = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchReviewsById = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data.results;
};

export const fetchVideo = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
  );
  return response.data.results;
};
