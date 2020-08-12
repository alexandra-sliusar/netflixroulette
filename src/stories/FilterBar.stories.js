import FilterBar from "./../components/FilterBar.vue";

export default {
  title: "FilterBar",
  component: FilterBar,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FilterBar },
  template:
    '<div style="background-color: black; min-height: 300px"><filter-bar v-bind="$props" /></div>',
});

export const DefaultFilterBar = Template.bind({});
DefaultFilterBar.args = {
  options: [{ text: "Title" }, { text: "Genre" }],
  filterName: "Search by",
};

export const ThreeOptionFilterBar = Template.bind({});
ThreeOptionFilterBar.args = {
  options: [{ text: "Option 1" }, { text: "Option 2" }, { text: "Option 3" }],
};

export const OneOptionFilterBar = Template.bind({});
OneOptionFilterBar.args = {
  options: [{ text: "Only Option" }],
};
