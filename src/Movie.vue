<template>
  <div id="app">
    <movie-header />
    <movie-results-body />
    <movie-footer />
  </div>
</template>

<script>
import MovieHeader from "./components/MovieHeader.vue";
import MovieResultsBody from "./components/MovieResultsBody.vue";
import MovieFooter from "./components/Footer.vue";

export default {
  name: "Movie",
  components: {
    MovieHeader,
    MovieResultsBody,
    MovieFooter
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
