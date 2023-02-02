import Stepper from "../components/Navigation/Stepper";

export default {
  title: "Navigation/Stepper",
  component: Stepper,
};

const Template = (args) => <Stepper {...args} />;

export const MuiStepper = Template.bind({});

MuiStepper.args = {
  steps: ["Select campaign settings", "Create an ad group", "Create an ad"],
};
