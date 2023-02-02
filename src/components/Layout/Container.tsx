import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "./Box";
import MuiContainer from "@mui/material/Container";

interface ContainerProps {
  width: number | string;
  height: number | string;
  backgroundColor: string;
  hoverBackGroundColor: string;
}
const Container: React.FC<ContainerProps> = ({
  width,
  height,
  backgroundColor,
  hoverBackGroundColor,
}) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <MuiContainer maxWidth="sm">
        <Box
          width={width}
          height={height}
          backgroundColor={backgroundColor}
          hoverBackGroundColor={hoverBackGroundColor}
        />
      </MuiContainer>
    </React.Fragment>
  );
};

export default Container;
