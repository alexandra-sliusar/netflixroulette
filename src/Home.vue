<template>
  <div id="app">
    <home-header @searchMovies="searchMovies" />
    <home-results-body :movies="movies" />
    <home-footer />
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeResultsBody from "./components/HomeResultsBody.vue";
import HomeFooter from "./components/Footer.vue";
import moviesJson from "./assets/movies.json";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeResultsBody,
    HomeFooter,
  },
  data: function() {
    return {
      movies: moviesJson,
    };
  },
  methods: {
    validateMovie(movieField, query) {
      if (typeof movieField === "string") {
        movieField = movieField.toLowerCase();
      } else {
        query = query.charAt(0).toUpperCase() + query.slice(1);
      }
      return movieField.includes(query);
    },

    searchMovies(searchRequest) {
      var self = this;
      if (searchRequest.query === "") {
        self.movies = moviesJson;
      } else {
        self.movies = self.$_.filter(moviesJson, function(movie) {
          return self.validateMovie(
            movie[searchRequest.searchField],
            searchRequest.query
          );
        });
      }
    },
  },
};
</script>

<style>
html {
  background-color: #555555;
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
}
</style>
