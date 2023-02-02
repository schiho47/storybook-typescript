import * as React from "react";

import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";

interface MenuListType {
  icon: React.ReactNode;
  title: string;
  tip: string;
}

interface MenuProps {
  menuList: MenuListType[];
  color?: string;
}
const Menu: React.FC<MenuProps> = ({ menuList, color }) => {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList color={color}>
        {menuList.map((list: MenuListType) => {
          return (
            <MenuItem key={list.title}>
              <ListItemIcon>{list.icon}</ListItemIcon>
              <ListItemText>{list.title}</ListItemText>
              <Typography variant="body2" color={color}>
                {list.tip}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Paper>
  );
};

export default Menu;
