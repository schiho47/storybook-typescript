import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

type Anchor = "top" | "left" | "bottom" | "right";
interface DrawerProps {
  type: "top" | "left" | "bottom" | "right";
  menuList: { text: string; icon: React.ReactNode }[];
}
const Drawer: React.FC<DrawerProps> = ({ type, menuList }) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuList.map((list, index) => (
          <ListItem key={list.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{list.icon}</ListItemIcon>
              <ListItemText primary={list.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer(type, true)}>{type}</Button>
        <SwipeableDrawer
          anchor={type}
          open={state[type]}
          onClose={toggleDrawer(type, false)}
          onOpen={toggleDrawer(type, true)}
        >
          {list(type)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default Drawer;
