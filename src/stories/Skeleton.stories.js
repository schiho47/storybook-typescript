import Skeleton from "../components/Feedback/Skeleton";

export default {
  title: "Feedback/Skeleton",
  component: Skeleton,
};

const Template = (args) => <Skeleton {...args} />;

export const MuiSkeleton = Template.bind({});

MuiSkeleton.args = {
  title: "how are you",
  channel: "your everyday channel",
  views: "100m",
  createdAt: "Today",
};
