import NavigationBar from "./../components/NavigationBar.vue";

export default {
  title: "NavigationBar",
  component: NavigationBar,
  argTypes: {
    searchIconPresent: Boolean,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavigationBar },
  template:
    '<navigation-bar v-bind="$props" />',
});

export const NavigationBarWithSearchIcon = Template.bind({});
NavigationBarWithSearchIcon.args = {
  searchIconPresent: true
};

export const NavigationBarWithoutSearchIcon = Template.bind({});
NavigationBarWithoutSearchIcon.args = {
  searchIconPresent: false
};
