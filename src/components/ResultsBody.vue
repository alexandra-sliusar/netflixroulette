<template>
  <div class="nx-results-body">
    <results-header :movies="movies" />
    <div class="nx-movies-list">
      <movie-item v-for="movie in movies" :key="movie.title" :movie="movie" />
    </div>
  </div>
</template>

<script>
import ResultsHeader from "./ResultsHeader.vue";
import MovieItem from "./MovieItem.vue";

export default {
  name: "ResultsBody",
  components: { ResultsHeader, MovieItem },
  data: function() {
    return {
      movies: [],
    };
  },
};
</script>

<style>
.nx-results-body {
  width: 100%;
  height: 100%;
  background-color: #232323;
}

.nx-movies-list {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
}
</style>
