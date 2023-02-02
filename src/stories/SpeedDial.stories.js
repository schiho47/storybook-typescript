import SpeedDial from "../components/Navigation/SpeedDial";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

export default {
  title: "Navigation/SpeedDial",
  component: SpeedDial,
};

const Template = (args) => <SpeedDial {...args} />;

export const MuiSpeedDial = Template.bind({});

MuiSpeedDial.args = {
  actions: [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ],
  styles: { position: "absolute", bottom: 16, right: 16 },
  position: { height: 320, transform: "translateZ(0px)", flexGrow: 1 },
};
