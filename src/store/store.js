import Vuex from "vuex";
import Vue from "vue";
import { _ } from "vue-underscore";
import ApiService from "./../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    movieById: null,
    searchFieldOption: "title",
    searchQuery: "",
    sortOption: "release_date",
  },
  getters: {
    getMovies: (state) => {
      return _.first(_.sortBy(state.movies, state.sortOption).reverse(), 18);
    },

    getMovieById: (state) => {
      return state.movieById;
    },
  },
  mutations: {
    CHANGE_SORT_OPTION(state, sortOption) {
      state.sortOption = sortOption;
    },

    CHANGE_SEARCH_FIELD_OPTION(state, searchFieldOption) {
      state.searchFieldOption = searchFieldOption;
    },

    CHANGE_SEARCH_QUERY(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },

  actions: {
    LOAD_MOVIES({ state }) {
      var sortBy = state.sortOption;
      var searchBy = state.searchFieldOption;
      var searchQuery = state.searchQuery.toLowerCase().trim();
      return ApiService.getMovies(sortBy, searchBy, searchQuery).then(
        (data) => {
          state.movies = data;
        }
      );
    },

    GET_MOVIE_BY_ID({ state }, movieId) {
      return ApiService.getMovieById(movieId).then((data) => {
        state.movieById = data;
      });
    },

    GET_MOVIES_BY_GENRES({ state }) {
      return ApiService.getMoviesByGenres(
        state.sortOption,
        state.movieById.genres
      ).then((data) => {
        state.movies = data;
      });
    },
  },
});
