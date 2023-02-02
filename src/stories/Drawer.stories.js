import Drawer from "../components/Navigation/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
export default {
  title: "Navigation/Drawer",
  component: Drawer,
};

const Template = (args) => <Drawer {...args} />;

export const MuiDrawer = Template.bind({});

MuiDrawer.args = {
  type: "left",
  menuList: [
    { text: "All mail", icon: <InboxIcon /> },
    { text: "Trash", icon: <MailIcon /> },
  ],
};
