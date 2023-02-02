import Backdrop from "../components/Feedback/Backdrop";

export default {
  title: "Feedback/Backdrop",
  component: Backdrop,
};

const Template = (args) => <Backdrop {...args} />;

export const MuiBackdrop = Template.bind({});

MuiBackdrop.args = {
  open: true,
};
