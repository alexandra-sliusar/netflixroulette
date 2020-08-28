<template>
  <main class="nx-movie-results-body">
    <genre-results-line :genres="genres" />
    <div v-if="movies.length" class="nx-movie-movies-list">
      <movie-item v-for="movie in movies" :key="movie.title" :movie="movie" />
    </div>
    <div v-else class="nx-movie-movies_empty">
      No films found
    </div>
  </main>
</template>

<script>
import GenreResultsLine from "./GenreResultsLine.vue";
import MovieItem from "./MovieItem.vue";

export default {
  name: "MovieResultsBody",
  components: { GenreResultsLine, MovieItem },
  data: function() {
    return {
      movies: [
        {
          title: "Star Wars: Episode IX – The Rise of Skywalker",
          releaseDate: 2019,
          genre: ["Adventure", "Comedy", "Sci-fi"],
          poster: "star_wars_5.jpg",
        },
        {
          title: "Back to the Future",
          releaseDate: 1985,
          genre: ["Adventure", "Comedy", "Sci-fi"],
          poster: "back_to_the_future.jpg",
        }
      ],
      genres: [ "Adventure", "Drama" ]
    };
  },
};
</script>

<style>
.nx-movie-results-body {
  width: 100%;
  height: 100%;
  background-color: #232323;
}

.nx-movie-movies-list {
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
}

.nx-movie-movies_empty {
  font-family: "Montserrat", sans-serif;
  color: #fff;
  opacity: 0.8;
  text-align: center;
  font-size: 300%;
  min-height: 500px;
  line-height: 500px;
}
</style>
