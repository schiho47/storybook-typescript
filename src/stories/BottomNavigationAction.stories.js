import BottomNavigationAction from "../components/Navigation/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default {
  title: "Navigation/ButtonNavigationAction",
  component: BottomNavigationAction,
};

const Template = (args) => <BottomNavigationAction {...args} />;

export const MuiButtonNavigationAction = Template.bind({});

MuiButtonNavigationAction.args = {
  label: "Favorites",
  icon: <FavoriteIcon />,
};
