import Tooltip from "../components/DataDisplay/Tooltip";

export default {
  title: "DataDisplay/Tooltip",
  component: Tooltip,
};

const Template = (args) => <Tooltip {...args} />;

export const MuiToolTip = Template.bind({});

MuiToolTip.args = {
  title: "delete",
  children: <button>Delete</button>,
};
