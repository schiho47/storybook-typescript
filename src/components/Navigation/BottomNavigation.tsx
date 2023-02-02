import * as React from "react";
import Box from "@mui/material/Box";
import MuiBottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

interface SimpleBottomNavigationProps {
  buttonArr: { id: number; label: string; icon: React.ReactNode }[];
}
const BottomNavigation: React.FC<SimpleBottomNavigationProps> = ({
  buttonArr,
}) => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <MuiBottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {buttonArr.map((button) => {
          return (
            <BottomNavigationAction
              key={button.id}
              label={button.label}
              icon={button.icon}
            />
          );
        })}
      </MuiBottomNavigation>
    </Box>
  );
};

export default BottomNavigation;
