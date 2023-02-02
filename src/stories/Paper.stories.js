import Paper from "../components/Surfaces/Paper";

export default {
  title: "Surfaces/Paper",
  component: Paper,
};

const Template = (args) => <Paper {...args}>This is a piece of paper</Paper>;

export const MuiPaper = Template.bind({});
MuiPaper.args = {};
