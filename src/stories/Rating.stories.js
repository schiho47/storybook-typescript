import Rating from "../components/Inputs/Rating";

export default {
  title: "Inputs/Rating",
  component: Rating,
};

const Template = (args) => <Rating {...args} />;

export const MuiRating = Template.bind({});

MuiRating.args = {
  title: "How do you feel about this?",
  value: 2,
};
