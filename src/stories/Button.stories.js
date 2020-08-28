import MyButton from "./../components/Button.vue";

export default {
  title: "Button",
  component: MyButton,
  argTypes: {
    msg: String,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  msg: "Default Button",
};

export const Other = Template.bind({});
Other.args = {
  msg: "Other Button",
};
