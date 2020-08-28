<template>
  <header class="nx-header">
    <div class="nx-header_blur">
      <navigation-bar :searchIconPresent="false" />
      <search-bar @searchMovies="searchMovies" />
    </div>
  </header>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
import SearchBar from "./SearchBar.vue";

export default {
  name: "HomeHeader",
  components: {
    NavigationBar,
    SearchBar,
  },
  methods: {
    searchMovies(searchRequest) {
      this.$emit("searchMovies", searchRequest);
    },
  },
};
</script>

<style>
.nx-header {
  background-image: url("../assets/posters_bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.nx-header_blur {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  padding-left: 50px;
  min-height: 400px;
}
</style>
