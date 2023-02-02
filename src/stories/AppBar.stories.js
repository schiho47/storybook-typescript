import AppBar from "../components/Surfaces/AppBar";

export default {
  title: "Surfaces/AppBar",
  component: AppBar,
};

const Template = (args) => <AppBar {...args} />;

export const MuiAppBar = Template.bind({});
MuiAppBar.args = {
  isStringLogo: true,
  title: "MUI AppBar",
};
