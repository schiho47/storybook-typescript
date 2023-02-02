import FloatingButton from "../components/Inputs/FloatingButton";
import AddIcon from "@mui/icons-material/Add";

export default {
  title: "Inputs/FloatingActionButton",
  component: FloatingButton,
};

const Template = (args) => <FloatingButton {...args} />;

export const MuiFloatingActionButton = Template.bind({});

MuiFloatingActionButton.args = {
  color: "secondary",
  children: <AddIcon />,
};
