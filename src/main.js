import Vue from "vue";
import Home from "./Home.vue";
import Movie from "./Movie.vue";
import NotFound from "./NotFound.vue";

const homeRoute = "/";
const movieRoutePattern = /^\/movies\/[0-9]+$/;

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      if (this.currentRoute === homeRoute) {
        console.log(`${this.currentRoute} passed home url`);
        return Home;
      } else if (movieRoutePattern.test(this.currentRoute)) {
        console.log(`${this.currentRoute} passed movie url`);
        return Movie;
      } else {
        console.log(`${this.currentRoute} not passed any url`);
        return NotFound;
      }
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
});
