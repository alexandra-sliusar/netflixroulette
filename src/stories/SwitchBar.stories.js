import SwitchBar from "./../components/SwitchBar.vue";

export default {
  title: "SwitchBar",
  component: SwitchBar,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwitchBar },
  template:
    '<div style="background-color: black; min-height: 300px"><switch-bar v-bind="$props" /></div>',
});

export const DefaultSwitchBar = Template.bind({});
DefaultSwitchBar.args = {
  options: [{ text: "Title" }, { text: "Genre" }],
  switchName: "Search by",
};

export const ThreeOptionSwitchBar = Template.bind({});
ThreeOptionSwitchBar.args = {
  options: [{ text: "Option 1" }, { text: "Option 2" }, { text: "Option 3" }],
};

export const OneOptionSwitchBar = Template.bind({});
OneOptionSwitchBar.args = {
  options: [{ text: "Only Option" }],
};
