<template>
  <div class="nx-movie-item">
    <a v-lazyload class="nx-movie-item_img-link" :href="movieUrl">
      <img
        class="nx-movie-item_img nx_animation-faded"
        :data-url="getImgUrl(movie.poster)"
        :alt="movie.title"
      />
    </a>
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
    movie: { type: Object, required: true },
  },
  computed: {
    genreList() {
      var movie = this.$props.movie;
      return movie.genre.join(" & ");
    },
    movieUrl() {
      return `/movies/${this.$props.movie.id}`;
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
  width: 100%;
  height: 450px;
}

.nx-movie-item_details {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  opacity: 0.8;
}

.nx-movie-item_title {
  font-size: 110%;
  width: 70%;
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

.nx_animation-faded {
  opacity: 0;
}

.nx_animation-fade_in {
  animation: fadeIn ease 3s;
  -webkit-animation: fadeIn ease 3s;
  -moz-animation: fadeIn ease 3s;
  -o-animation: fadeIn ease 3s;
  -ms-animation: fadeIn ease 3s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
