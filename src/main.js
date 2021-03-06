import Vue from "vue";
import store from "./store/store.js";
import underscore from "vue-underscore";
import plugin from "./plugins/plugin.js";
import Home from "./Home.vue";
import Movie from "./Movie.vue";
import NotFound from "./NotFound.vue";
import ApiService from "./api";

const homeRoute = "/";
const movieRoutePattern = /^\/movies\/[0-9]+$/;

Vue.config.productionTip = false;
Vue.use(underscore);
Vue.use(plugin);

ApiService.init();

new Vue({
  el: "#app",
  store,
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
