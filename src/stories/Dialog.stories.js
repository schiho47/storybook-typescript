import Dialog from "../components/Feedback/Dialog";
import Typography from "../components/DataDisplay/Typography";


export default {
  title: "Feedback/Dialog",
  component: Dialog,
};

const Template = (args) => (
  <Dialog {...args}>
    <Typography variant="body1">
      Commodo ullamco aliqua in aliquip.Officia consequat do anim et. Ut
      incididunt officia anim laboris ea ipsum reprehenderit magna pariatur
      sunt. Ullamco consectetur commodo non minim anim voluptate officia. Sint
      ipsum sit dolore esse consectetur cillum do nostrud tempor commodo esse
      qui laborum. Veniam dolor do sint reprehenderit deserunt enim commodo
      laborum officia voluptate consequat.
    </Typography>
  </Dialog>
);

export const MuiDialog = Template.bind({});

MuiDialog.args = {
  open: true,
  title: "This is a title",
};

