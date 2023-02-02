import Box from "../components/Layout/Box";

export default {
  title: "Layout/Box",
  component: Box,
};

const Template = (args) => <Box {...args} />;

export const MuiBox = Template.bind({});

MuiBox.args = {
  width: 300,
  height: 300,
  backgroundColor: "#762323",
  hoverBackGroundColor: "#de7878",
};
