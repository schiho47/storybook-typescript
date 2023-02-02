import Masonry from "../components/Lab/Masonry";

export default {
  title: "Lab/Masonry",
  component: Masonry,
};

const Template = (args) => <Masonry {...args} />;

export const MuiMasonry = Template.bind({});

MuiMasonry.args = {
  heights: [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80],
};
