import SearchResultsLine from "./../components/SearchResultsLine.vue";

export default {
  title: "SearchResultsLine",
  component: SearchResultsLine,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SearchResultsLine },
  template: '<search-results-line v-bind="$props" />',
});

export const ResultsLineWithResults = Template.bind({});
ResultsLineWithResults.args = {
  movies: [
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
  ],
};

export const ResultsLineWithEmptyList = Template.bind({});
ResultsLineWithEmptyList.args = {
  movies: [],
};
