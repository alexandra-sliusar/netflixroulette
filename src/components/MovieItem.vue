<template>
  <div class="nx-movie-item">
    <img class="nx-movie-item_img" :src="getImgUrl(movie.poster)" />
    <div class="nx-movie-item_details">
      <div class="nx-movie-item_title">
        {{ movie.title }}
      </div>
      <div class="nx-movie-item_year">
        {{ movie.releaseDate }}
      </div>
      <div class="nx_movie-item_genre">
        {{ genreList }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: Object,
  },
  computed: {
    genreList() {
      if (!this.$props.movie) return "";
      var movie = this.$props.movie;
      return movie.genre.join(" & ");
    },
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/posters/" + pic);
    },
  },
};
</script>

<style>
.nx-movie-item {
  width: 300px;
  margin: 40px 40px 0;
  display: flex;
  flex-flow: column wrap;
  color: #fff;
  font-family: "Montserrat", sans-serif;
}

.nx-movie-item_img {
  max-width: 100%;
  height: auto;
  margin: 10px;
}

.nx-movie-item_details {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  opacity: 0.8;
}

.nx-movie-item_title {
  font-size: 110%;
  max-width: 80%;
}

.nx-movie-item_year {
  padding: 3px 10px;
  font-size: 90%;
  border-radius: 5px;
  border: #666 solid 1px;
}

.nx_movie-item_genre {
  margin: 8px 0;
  font-size: 90%;
  opacity: 0.7;
}
</style>
