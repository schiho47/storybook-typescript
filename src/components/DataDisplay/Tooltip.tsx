import { ReactElement } from "react";
import MuiTooltip from "@mui/material/Tooltip";

interface TooltipProps {
  title: string;
  children: ReactElement;
  classes?: object;
}
const Tooltip: React.FC<TooltipProps> = ({ title, children, classes }) => {
  return (
    <MuiTooltip title={title} classes={classes}>
      {children}
    </MuiTooltip>
  );
};

export default Tooltip;
