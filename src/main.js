import Vue from "vue";
import underscore from 'vue-underscore';
import Home from "./Home.vue";
import Movie from "./Movie.vue";
import NotFound from "./NotFound.vue";

const homeRoute = "/";
const movieRoutePattern = /^\/movies\/[0-9]+$/;

Vue.config.productionTip = false;
Vue.use(underscore);

new Vue({
  el: "#app",
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      if (this.currentRoute === homeRoute) {
        return Home;
      } else if (movieRoutePattern.test(this.currentRoute)) {
        return Movie;
      } else {
        return NotFound;
      }
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
});
