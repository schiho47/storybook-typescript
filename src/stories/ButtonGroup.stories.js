import ButtonGroup from "../components/Inputs/ButtonGroup";
import Button from "../components/Inputs/Button";

export default {
  title: "Inputs/ButtonGroup",
  component: ButtonGroup,
  subcomponents: { Button },
};

const Template = (args) => <ButtonGroup {...args} />;

export const MuiButtonGroup = Template.bind({});
MuiButtonGroup.args = {
  variant: "contained",
  buttonOne: "One",
  buttonTwo: "Two",
  buttonThree: "Three",
  color: "secondary",
};
export const MuiButtonGroupTwo = Template.bind({});
MuiButtonGroupTwo.args = {
  variant: "outlined",
  buttonOne: "One",
  buttonTwo: "Two",
  buttonThree: "Three",
  color: "secondary",
};
