import LineProgress from "../components/Feedback/LineProgress";

export default {
  title: "Feedback/LineProgress",
  component: LineProgress,
};

const Template = (args) => <LineProgress {...args} />;

export const MuiLineProgress = Template.bind({});

MuiLineProgress.args = {
  style: { width: "80%", marginTop: "1rem" },
};
