import Vuex from "vuex";
import Vue from "vue";
import { _ } from "vue-underscore";
import moviesJson from "./../assets/movies.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: moviesJson,
  },
  getters: {
    getMovies: (state) => {
      return state.movies;
    },

    getMovieById: (state) => {
      var path = window.location.pathname;
      var movieId = path.split("/")[2];
      return _.find(state.movies, (movie) => movie.id === movieId);
    },

    getMoviesWithSameGenres: (state) => (targetMovie) => {
      return _.filter(state.movies, (movie) => {
        if (targetMovie.id === movie.id) return false;
        return _.intersection(targetMovie.genre, movie.genre).length > 0;
      });
    },
  },
});
