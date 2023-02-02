import Typography from "../components/DataDisplay/Typography";

export default {
  title: "DataDisplay/Typography",
  component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const MuiTypography = Template.bind({});

MuiTypography.args = {
  variant: "h2",
  children: "I am h2",
};
