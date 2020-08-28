<template>
  <div class="nx-movie-details">
    <img class="nx-movie-details_img" :src="getImgUrl(movie.poster)" />
    <div class="nx-movie-details_details">
      <div class="nx-movie-details_title">
        {{ movie.title }}
        <div class="nx-movie-details_rating">
          <span>{{ getRating(movie.rating) }}</span>
        </div>
      </div>
      <div class="nx-movie-details_genre">
        {{ genreList }}
      </div>
      <div class="nx-movie-details_release-duration">
        <span class="nx-movie-details_release">
          {{ movie.releaseDate }}
        </span>
        <span class="nx-movie-details_duration"> {{ movie.duration }} min</span>
      </div>
      <div class="nx-movie-details_desc">
        {{ movie.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetails",
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

    getRating(val) {
      return parseFloat(val).toFixed(1);
    },
  },
};
</script>

<style>
.nx-movie-details {
  display: flex;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  padding-bottom: 60px;
}

.nx-movie-details_img {
  width: 250px;
  height: auto;
  max-height: 400px;
}

.nx-movie-details_details {
  margin: 30px 40px;
}

.nx-movie-details_title {
  font-size: 300%;
  opacity: 0.8;
}

.nx-movie-details_rating {
  display: inline-block;
  border: #fff solid 1px;
  border-radius: 50%;
  width: 65px;
  height: 65px;
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
}

.nx-movie-details_rating span {
  color: #a1e66f;
  font-size: 55%;
}

.nx-movie-details_genre {
  opacity: 0.65;
}

.nx-movie-details_release-duration {
  margin: 30px 0;
  font-size: 150%;
  opacity: 1;
  color: #f65261;
}

.nx-movie-details_release {
  margin-right: 40px;
}

.nx-movie-details_desc {
  opacity: 0.8;
  word-wrap: break-word;
}
</style>
