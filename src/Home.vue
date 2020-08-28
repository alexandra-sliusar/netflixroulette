<template>
  <div id="app">
    <home-header />
    <home-results-body />
    <home-footer />
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeResultsBody from "./components/HomeResultsBody.vue";
import HomeFooter from "./components/Footer.vue";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeResultsBody,
    HomeFooter
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
