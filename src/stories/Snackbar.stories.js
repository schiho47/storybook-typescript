import Snackbar from "../components/Feedback/Snackbar";
import Alert from "../components/Feedback/Alert";
export default {
  title: "Feedback/Snackbar",
  component: Snackbar,
};

const Template = (args) => (
  <Snackbar {...args}>
    <div>
      <Alert
        severity="info"
        color="info"
        onClose={() => {}}
        content={"I AM A SNACKBAR"}
        open={true}
      />
    </div>
  </Snackbar>
);

export const MuiSnackbar = Template.bind({});

MuiSnackbar.args = {
  open: true,
};
