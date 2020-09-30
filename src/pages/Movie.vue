<template>
  <div id="movie-content">
    <movie-header />
    <movie-results-body />
    <movie-footer />
  </div>
</template>

<script>
import MovieHeader from "./../components/MovieHeader.vue";
import MovieResultsBody from "./../components/MovieResultsBody.vue";
import MovieFooter from "./../components/Footer.vue";

export default {
  name: "Movie",
  components: {
    MovieHeader,
    MovieResultsBody,
    MovieFooter,
  },
  async created() {
    await this.$store.dispatch("GET_MOVIE_BY_ID", this.$route.params.id);
    await this.$store.dispatch("GET_MOVIES_BY_GENRES");
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
