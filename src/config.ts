export const API_URL: string = 'https://api.themoviedb.org/3/';
export const API_KEY: string | undefined = process.env.TMDB_API_KEY;

export const DISCOVER_BASE_URL: string = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
export const GENRE_BASE_URL: string =`${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`
export const SEARCH_BASE_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
export const TOP_RATED_BASE_URL: string = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`;

// For ID based searches
export const movieUrl = (id?: string) => `${API_URL}movie/${id}?api_key=${API_KEY}`;
export const genreUrl = (id?: string) => `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&with_genres=${id}`
export const creditsUrl = (id?: string) => `${API_URL}movie/${id}/credits?api_key=${API_KEY}`;

// Images
export const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
export const BACKDROP_SIZE: string = 'w1280';
// w92, w154, w185, w342, w500, w780, original
export const POSTER_SIZE: string = 'w780';
export const THUMB_SIZE: string = 'w342'
