import axios from "axios";

const api_key = "9f6ca43fbf8d637bb2bce548e541542d";
const movieBase = "https://api.themoviedb.org/3";

// ✅ fetch popular movies (for Slider)
const fetchPopularMovies = () =>
    axios.get(`${movieBase}/movie/popular?api_key=${api_key}`);

// ✅ fetch movies by genre (for MovieList)
const getMovieByGenId = (id) =>
    axios.get(`${movieBase}/discover/movie?api_key=${api_key}&with_genres=${id}`);

export default {
    fetchPopularMovies,
    getMovieByGenId,
};
