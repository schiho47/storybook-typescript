import Chip from "../components/DataDisplay/Chip";

export default {
  title: "DataDisplay/Chip",
  component: Chip,
};

const Template = (args) => <Chip {...args} />;
export const MuiChip = Template.bind({});

MuiChip.args = {
  label: "GREEN",
};
