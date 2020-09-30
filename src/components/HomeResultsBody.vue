<template>
  <main class="nx-results-body">
    <search-results-line :moviesLength="movies.length" />
    <div v-if="movies.length" class="nx-movies-list">
      <movie-item v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
    <div v-else class="nx-movies_empty">
      No films found
    </div>
  </main>
</template>

<script>
import SearchResultsLine from "./SearchResultsLine.vue";
import MovieItem from "./MovieItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomeResultsBody",
  components: { SearchResultsLine, MovieItem },
  computed: {
    ...mapGetters({
      movies: "getMovies",
    }),
  },
  created() {
    this.$store.dispatch("LOAD_MOVIES");
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
  justify-content: space-evenly;
  flex-flow: row wrap;
  padding: 30px 0;
}

.nx-movies_empty {
  font-family: "Montserrat", sans-serif;
  color: #fff;
  opacity: 0.8;
  text-align: center;
  font-size: 300%;
  min-height: 500px;
  line-height: 500px;
}
</style>
