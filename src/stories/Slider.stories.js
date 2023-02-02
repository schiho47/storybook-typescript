import Slider from "../components/Inputs/Slider";

export default {
  title: "Inputs/Slider",
  component: Slider,
};

const Template = (args) => <Slider {...args} />;

export const MuiSlider = Template.bind({});

MuiSlider.args = {
  value: 20,
};
