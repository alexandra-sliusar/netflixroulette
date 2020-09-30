import Router from "vue-router";
import Home from "./pages/Home.vue";
import Movie from "./pages/Movie.vue";
import NotFound from "./pages/NotFound.vue";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/movies/:id(\\d+)",
      name: "Movie",
      component: Movie,
    },
    {
      path: "*",
      name: "Not Found",
      component: NotFound,
    },
  ],
});
