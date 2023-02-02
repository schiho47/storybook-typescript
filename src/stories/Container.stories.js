import Container from "../components/Layout/Container";

export default {
  title: "Layout/Container",
  component: Container,
};

const Template = (args) => <Container {...args} />;

export const MuiContainer = Template.bind({});

MuiContainer.args = {
  width: 500,
  height: "100vh",
  backgroundColor: "#762323",
  hoverBackGroundColor: "#de7878",
};
