import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

interface BasicSpeedDialProps {
  actions: { icon: React.ReactNode; name: string }[];
  styles?: object;
  position?: object;
}
const BasicSpeedDial: React.FC<BasicSpeedDialProps> = ({
  actions,
  styles = { position: "absolute", bottom: 16, right: 16 },
  position = { height: 320, transform: "translateZ(0px)", flexGrow: 1 },
}) => {
  return (
    <Box sx={position}>
      <SpeedDial ariaLabel="SpeedDial" sx={styles} icon={<SpeedDialIcon />}>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default BasicSpeedDial;
