import Avatar from "../components/DataDisplay/Avatar";

export default {
  title: "DataDisplay/Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args}>H</Avatar>;

export const MuiAvatar = Template.bind({});

MuiAvatar.args = {
  isImageAvatar: false,
  color: "green",
};
