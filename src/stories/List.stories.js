import List from "../components/DataDisplay/List";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
export default {
  title: "DataDisplay/List",
  component: List,
};

const Template = (args) => <List {...args} />;

export const MuiList = Template.bind({});

MuiList.args = {
  dataDisplayList: [
    { icon: <InboxIcon />, primary: "Sent mail" },
    { icon: <DraftsIcon />, primary: "Drafts" },
    { icon: <SendIcon />, primary: "Inbox" },
  ],
};
