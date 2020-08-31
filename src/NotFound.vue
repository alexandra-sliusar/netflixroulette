<template>
  <div id="app">
    <navigation-bar :searchIconPresent="false" />
    <p class="nx-error-404">We're sorry but this page is not available.</p>
    <error-footer />
  </div>
</template>

<script>
import ErrorFooter from "./components/Footer.vue";
import NavigationBar from "./components/NavigationBar.vue";
export default {
  name: "NotFound",
  components: { ErrorFooter, NavigationBar },
};
</script>

<style>
html {
  background-color: #555555;
  width: 100%;
  height: 100%;
}
.nx-error-404 {
  width: 100%;
  background-color: #232323;
  min-height: 500px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 200%;
  color: #fff;
  opacity: 0.85;
  margin: 0;
  padding-top: 50px;
}
</style>
