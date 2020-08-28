import ResultsHeader from "./../components/ResultsHeader.vue";

export default {
  title: "ResultsHeader",
  component: ResultsHeader,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ResultsHeader },
  template: '<results-header v-bind="$props" />',
});

export const ResultsHeaderWithResults = Template.bind({});
ResultsHeaderWithResults.args = {
  movies: [
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
  ],
};

export const ResultsHeaderWithEmptyList = Template.bind({});
ResultsHeaderWithEmptyList.args = {
  movies: [],
};
