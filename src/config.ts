// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL: string = 'https://api.themoviedb.org/3/';
const API_KEY: string | boolean | undefined = import.meta.env.VITE_APP_API_KEY;

const SEARCH_BASE_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL: string = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const LATEST_BASE_URL: string = `${API_URL}movie/latest?api_key=${API_KEY}&language=en-US`;
const NOW_PLAYING_BASE_URL: string = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US`;
const GENRE_URL: string = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;
// For login and voting
const REQUEST_TOKEN_URL: string = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL: string = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
const SESSION_ID_URL: string = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE: string = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE: string = 'w780';

export {
  API_KEY,
  API_URL,
  BACKDROP_SIZE,
  GENRE_URL,
  IMAGE_BASE_URL,
  LATEST_BASE_URL,
  LOGIN_URL,
  NOW_PLAYING_BASE_URL,
  POPULAR_BASE_URL,
  POSTER_SIZE,
  REQUEST_TOKEN_URL,
  SEARCH_BASE_URL,
  SESSION_ID_URL,
};
