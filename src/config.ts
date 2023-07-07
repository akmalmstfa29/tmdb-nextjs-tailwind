// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL: string = 'https://api.themoviedb.org/3/';
const API_KEY: string | undefined = process.env.TMDB_API_KEY;

// For ID based searches
const movieUrl = (id?: string) => `${API_URL}movie/${id}?api_key=${API_KEY}`;

// Images
const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE: string = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE: string = 'w780';
const THUMB_SIZE: string = 'w342'

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  movieUrl,
  THUMB_SIZE,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
