import Checkbox from "../components/Inputs/Checkbox";

export default {
  title: "Inputs/CheckBox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const MuiCheckbox = Template.bind({});

MuiCheckbox.args = {
  label: "Checkbox",
  checked: true,
};
