<template>
  <div id="app">
    <movie-header :movie="movie" />
    <movie-results-body :movies="moviesWithGenres" :movie="movie" />
    <movie-footer />
  </div>
</template>

<script>
import MovieHeader from "./components/MovieHeader.vue";
import MovieResultsBody from "./components/MovieResultsBody.vue";
import MovieFooter from "./components/Footer.vue";
import moviesJson from "./assets/movies.json";

export default {
  name: "Movie",
  components: {
    MovieHeader,
    MovieResultsBody,
    MovieFooter,
  },
  computed: {
    movie() {
      var path = window.location.pathname;
      var movieId = path.split("/")[2];
      return this.$_.find(moviesJson, function(movie) {
        return movie.id === movieId;
      });
    },

    moviesWithGenres() {
      var self = this;
      return self.$_.filter(moviesJson, function(movie) {
        if (self.movie.id === movie.id) return false;
        return self.$_.intersection(self.movie.genre, movie.genre).length > 0;
      });
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
