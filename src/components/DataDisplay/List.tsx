import React, { ReactNode, useState } from "react";
import MuiList from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
interface ListProps {
  dataDisplayList: { icon: ReactNode; primary: string }[];
}
const List: React.FC<ListProps> = ({ dataDisplayList }) => {
  const [open, setOpen] = useState(true);

  const handleClick = (primary: string) => {
    if (primary === "Inbox") setOpen(!open);
  };

  return (
    <MuiList
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      {dataDisplayList.map((item, index) => {
        return (
          <ListItemButton key={index} onClick={() => handleClick(item.primary)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.primary} />
            {item.primary === "Inbox" && open ? (
              <ExpandLess />
            ) : item.primary === "Inbox" ? (
              <ExpandMore />
            ) : (
              ""
            )}
          </ListItemButton>
        );
      })}

      <Collapse in={open} timeout="auto" unmountOnExit>
        <MuiList component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </MuiList>
      </Collapse>
    </MuiList>
  );
};
export default List;
