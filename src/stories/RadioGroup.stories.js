import RadioGroup from "../components/Inputs/RadioGroup";

export default {
  title: "Inputs/RadioGroup",
  component: RadioGroup,
};

const Template = (args) => <RadioGroup {...args} />;

export const MuiRadioGroup = Template.bind({});

MuiRadioGroup.args = {
  title: "Choose a Fruit",
  labelOne: "Apple",
  labelTwo: "Banana",
  labelThree: "Cherry",
  valueOne: "apple",
  valueTwo: "banana",
  valueThree: "cherry",
  radioName: "chooseFruit",
  groupId: "fruit",
};
