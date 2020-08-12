import MovieItem from "./../components/MovieItem.vue";

export default {
  title: "MovieItem",
  component: MovieItem,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MovieItem },
  template:
    '<div style="background-color: #232323; height:100%"><movie-item v-bind="$props" /></div>',
});

export const DefaultMovieItem = Template.bind({});
DefaultMovieItem.args = {
  movie: {
    title: "Back to the Future",
    releaseDate: 1985,
    genre: ["Adventure", "Comedy", "Sci-fi"],
    poster: "back_to_the_future.jpg",
  },
};

export const MovieItemWithLongTitle = Template.bind({});
MovieItemWithLongTitle.args = {
  movie: {
    title: "Star Wars: Episode IX – The Rise of Skywalker",
    releaseDate: 2019,
    genre: ["Adventure", "Comedy", "Sci-fi"],
    poster: "star_wars_5.jpg",
  },
};

export const MovieItemWithALotOfGenres = Template.bind({});
MovieItemWithALotOfGenres.args = {
  movie: {
    title: "Star Wars",
    releaseDate: 2020,
    genre: [
      "Adventure",
      "Comedy",
      "Sci-fi",
      "Animation",
      "Fantasy",
      "Thriller",
      "Action",
    ],
    poster: "star_wars_5.jpg",
  },
};
