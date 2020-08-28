import GenreResultsLine from "./../components/GenreResultsLine.vue";

export default {
  title: "GenreResultsLine",
  component: GenreResultsLine,
  argTypes: {
    genres: Array,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GenreResultsLine },
  template: '<genre-results-line v-bind="$props" />',
});

export const GenreResultsLineWithOneGenre = Template.bind({});
GenreResultsLineWithOneGenre.args = {
  genres: [ "Drama" ]
};

export const GenreResultsLineWithSeveralGenres = Template.bind({});
GenreResultsLineWithSeveralGenres.args = {
  genres: [ "Adventure", "Drama" ]
};
