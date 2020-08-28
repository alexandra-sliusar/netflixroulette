<template>
  <div class="nx-results-line">
    <span class="nx-results-title">
      {{ resultsString }}
    </span>
    <switch-bar switchName="Sort by" :options="options" />
  </div>
</template>

<script>
import SwitchBar from "./SwitchBar.vue";

export default {
  name: "SearchResultsLine",
  components: { SwitchBar },
  props: {
    movies: Array,
  },

  data: function() {
    return {
      options: [{ text: "Release Date" }, { text: "Rating" }],
    };
  },

  computed: {
    resultsString() {
      var movies = this.$props.movies;
      if (!movies || movies.length === 0) return "";
      return `${movies.length} movie${movies.length > 1 ? "s" : ""} found`;
    },
  },
};
</script>

<style>
.nx-results-line {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #555555;
  padding: 0 50px;
  min-height: 60px;
  line-height: 60px;
}

.nx-results-title {
  font-size: 95%;
  font-weight: 800;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  vertical-align: middle;
}
</style>
