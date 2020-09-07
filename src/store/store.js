import Vuex from "vuex";
import Vue from "vue";
import { _ } from "vue-underscore";
import moviesJson from "./../assets/movies.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: moviesJson,
    searchFieldOption: "title",
    searchQuery: "",
    sortOption: "releaseDate",
  },
  getters: {
    getMovies: (state) => {
      return _.sortBy(state.movies, state.sortOption).reverse();
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
  mutations: {
    RESET_STATE(state) {
      state.movies = moviesJson;
      state.searchFieldOption = "title";
      state.searchQuery = "";
      state.sortOption = "releaseDate";
    },

    CHANGE_SORT_OPTION(state, sortOption) {
      state.sortOption = sortOption;
    },

    CHANGE_SEARCH_FIELD_OPTION(state, searchFieldOption) {
      state.searchFieldOption = searchFieldOption;
    },

    CHANGE_SEARCH_QUERY(state, searchQuery) {
      state.searchQuery = searchQuery;
    },

    SEARCH_MOVIES(state) {
      var searchQuery = state.searchQuery.toLowerCase().trim();
      if (searchQuery) {
        state.movies = _.filter(moviesJson, (movie) => {
          var movieField = movie[state.searchFieldOption];
          if (movieField.constructor === Array)
            movieField = movieField.join(' ');
          movieField = movieField.toLowerCase();

          return movieField.includes(searchQuery);
        });
      } else {
        state.movies = moviesJson;
      }
    },
  },
});
