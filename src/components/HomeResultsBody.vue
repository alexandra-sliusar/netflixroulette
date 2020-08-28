<template>
  <main class="nx-results-body">
    <search-results-line
      :moviesLength="movies.length"
      @sortingChanged="changeSorting"
    />
    <div v-if="movies.length" class="nx-movies-list">
      <movie-item v-for="movie in sortedList" :key="movie.id" :movie="movie" />
    </div>
    <div v-else class="nx-movies_empty">
      No films found
    </div>
  </main>
</template>

<script>
import SearchResultsLine from "./SearchResultsLine.vue";
import MovieItem from "./MovieItem.vue";

export default {
  name: "HomeResultsBody",
  components: { SearchResultsLine, MovieItem },
  props: {
    movies: Array,
  },

  data: function() {
    return { sortingOption: "releaseDate" };
  },

  computed: {
    sortedList() {
      return this.$_.sortBy(this.movies, this.sortingOption).reverse();
    },
  },

  methods: {
    changeSorting(newSortingOption) {
      this.sortingOption = newSortingOption;
    },
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
