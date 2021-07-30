const API_URL = process.env.REACT_APP_API_URL;
const IMAGE_URL = process.env.REACT_APP_API_IMAGE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const POPULAR_MOVIES = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const SEARCH_MOVIE = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const MOVIE_DETAILS = (id) => `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
export { POPULAR_MOVIES, SEARCH_MOVIE, MOVIE_DETAILS, IMAGE_URL, API_KEY, API_URL };
// eslint-disable-next-line prettier/prettier

