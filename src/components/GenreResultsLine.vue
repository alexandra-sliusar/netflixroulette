<template>
  <div class="nx-genre-results-line">
    <span class="nx-genre-results-title"> Films by {{ genreList }} </span>
  </div>
</template>

<script>
export default {
  name: "GenreResultsLine",
  props: {
    genres: Array,
  },
  computed: {
    genreList() {
      var genres = this.$props.genres;
      var list = genres.join(' or ');
      return `${list} genre${genres.length > 1 ? "s" : ""}`;
    },
  },
};
</script>

<style>
.nx-genre-results-line {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #555555;
  padding: 0 50px;
  min-height: 60px;
  line-height: 60px;
}

.nx-genre-results-title {
  font-size: 95%;
  font-weight: 800;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  vertical-align: middle;
}</style>
