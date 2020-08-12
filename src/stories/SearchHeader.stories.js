import SearchHeader from "./../components//SearchHeader.vue";

export default {
  title: "SearchHeader",
  component: SearchHeader,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SearchHeader },
  template:
    '<div style="background-color: black; min-height: 300px"><search-header /></div>',
});

export const DefaultSearchHeader = Template.bind({});
DefaultSearchHeader.args = {};
