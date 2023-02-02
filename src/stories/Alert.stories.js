import Alert from "../components/Feedback/Alert";

export default {
  title: "Feedback/Alert",
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const MuiAlertError = Template.bind({});

MuiAlertError.args = {
  severity: "error",
  color: "error",
  content: "THIS IS AN ERROR !",
  open: true,
};

export const MuiAlertSuccess = Template.bind({});

MuiAlertSuccess.args = {
  severity: "success",
  color: "success",
  content: "YOUR ANSWER IS RIGHT",
  open: true,
};
