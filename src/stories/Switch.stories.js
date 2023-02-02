import Switch from "../components/Inputs/Switch";

export default {
  title: "Inputs/Switch",
  component: Switch,
};

const Template = (args) => <Switch {...args} />;

export const MuiSwitch = Template.bind({});

MuiSwitch.args = {
  label: "Label",
  color: "primary",
  defaultCheck: true,
};
