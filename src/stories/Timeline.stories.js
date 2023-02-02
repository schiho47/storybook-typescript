import Timeline from "../components/Lab/Timeline";

export default {
  title: "Lab/Timeline",
  component: Timeline,
};

const Template = (args) => <Timeline {...args} />;

export const MuiTimeline = Template.bind({});

MuiTimeline.args = {
  timeLineItems: [
    { color: "primary", label: "Primary" },
    { color: "secondary", label: "Secondary" },
    { color: "success", label: "Success" },
  ],
};
