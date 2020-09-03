<template>
  <main class="nx-movie-results-body">
    <genre-results-line :genres="movie.genre" />
    <div v-if="movies.length" class="nx-movie-movies-list">
      <movie-item v-for="movie in movies" :key="movie.title" :movie="movie" />
    </div>
    <div v-else class="nx-movie-movies_empty">
      No films found
    </div>
  </main>
</template>

<script>
import GenreResultsLine from "./GenreResultsLine.vue";
import MovieItem from "./MovieItem.vue";

export default {
  name: "MovieResultsBody",
  components: { GenreResultsLine, MovieItem },
  computed: {
    movie() {
      return this.$store.getters.getMovieById;
    },
    movies() {
      return this.$store.getters.getMoviesWithSameGenres(this.movie);
    },
  },
};
</script>

<style>
.nx-movie-results-body {
  width: 100%;
  height: 100%;
  background-color: #232323;
}

.nx-movie-movies-list {
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  padding: 30px 0;
}

.nx-movie-movies_empty {
  font-family: "Montserrat", sans-serif;
  color: #fff;
  opacity: 0.8;
  text-align: center;
  font-size: 300%;
  min-height: 500px;
  line-height: 500px;
}
</style>
