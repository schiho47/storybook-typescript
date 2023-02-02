import BottomNavigation from "../components/Navigation/BottomNavigation";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default {
  title: "Navigation/ButtonNavigation",
  component: BottomNavigation,
};

const Template = (args) => <BottomNavigation {...args} />;

export const MuiButtonNavigation = Template.bind({});

MuiButtonNavigation.args = {
  buttonArr: [
    { id: 1, label: "Recents", icon: <RestoreIcon /> },
    { id: 2, label: "Favorites", icon: <FavoriteIcon /> },
    { id: 3, label: "Nearby", icon: <LocationOnIcon /> },
  ],
};
