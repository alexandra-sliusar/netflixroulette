<template>
  <header class="nx-movie-header">
    <div class="nx-movie-header_blur">
      <navigation-bar :searchIconPresent="true" />
      <movie-details :movie="movie" />
    </div>
  </header>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
import MovieDetails from "./MovieDetails.vue";

export default {
  name: "HomeHeader",
  components: {
    NavigationBar,
    MovieDetails,
  },
  data: function() {
    return {
      movie: {
        title: "Back to the Future",
        releaseDate: 1985,
        genre: ["Adventure", "Comedy", "Sci-fi"],
        poster: "back_to_the_future.jpg",
        rating: "8",
        duration: "116",
        description: `Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean  invented by his close friend, the eccentric scientist Doc Brown.`,
      },
    };
  },
};
</script>

<style>
.nx-movie-header {
  background-image: url("../assets/posters_bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.nx-movie-header_blur {
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(6px);
  padding-left: 50px;
  min-height: 400px;
}
</style>
