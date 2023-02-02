import * as React from "react";
import MuiBox from "@mui/material/Box";

interface BoxProps {
  width: number | string;
  height: number | string;
  backgroundColor: string;
  hoverBackGroundColor: string;
}
const Box: React.FC<BoxProps> = ({
  width,
  height,
  backgroundColor,
  hoverBackGroundColor,
}) => {
  return (
    <MuiBox
      sx={{
        width: { width },
        height: { height },
        backgroundColor: { backgroundColor },
        "&:hover": {
          backgroundColor: { hoverBackGroundColor },
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
};

export default Box;
