import TextField from "../components/Inputs/TextField";
import {within, userEvent} from '@storybook/testing-library';

export default {
  title: "Inputs/TextField",
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const MuiTextField = Template.bind({});

MuiTextField.args = {
  label: "How old are you",
  variant: "outlined",
  color: "info",
};

MuiTextField.play=async({canvasElement})=>{
  const canvas=within(canvasElement);
  const textFieldTest=await canvas.getByLabelText('How old are you');

  await userEvent.click(textFieldTest);
}