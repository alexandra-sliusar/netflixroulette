import SearchBar from "./../components//SearchBar.vue";

export default {
  title: "SearchBar",
  component: SearchBar,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SearchBar },
  template:
    '<div style="background-color: black; min-height: 300px"><search-bar /></div>',
});

export const DefaultSearchBar = Template.bind({});
DefaultSearchBar.args = {};
