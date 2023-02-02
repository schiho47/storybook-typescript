import Menu from "../components/Navigation/Menu";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";

export default {
  title: "Navigation/Menu",
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const MuiMenu = Template.bind({});

MuiMenu.args = {
  menuList: [
    { icon: <ContentCut fontSize="small" />, title: "Cut", tip: "⌘X" },
    {
      icon: <ContentCopy fontSize="small" />,
      title: "Copy",
      tip: "⌘C",
    },
    {
      icon: <ContentPaste fontSize="small" />,
      title: "Paste",
      tip: "⌘V",
    },
    {
      icon: <Cloud fontSize="small" />,
      title: "Web Clipboard",
      tip: "",
    },
  ],
  color: "secondary",
};
