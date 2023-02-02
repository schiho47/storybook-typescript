import * as React from "react";
import MuiPaper from "@mui/material/Paper";

interface PaperProps {
  children: React.ReactNode;
  elevation?: number;
  square?: boolean;
  classes?: object;
  variant?: "elevation" | "outlined";
}
const Paper: React.FC<PaperProps> = ({
  children,
  elevation = 3,
  square = false,
  classes,
  variant = "elevation",
}) => {
  return (
    <MuiPaper
      elevation={elevation}
      classes={classes}
      square={square}
      variant={variant}
    >
      {children}
    </MuiPaper>
  );
};

export default Paper;
