import MuiLinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

interface LinearProgressProps {
  style: object;
  classes?: object;
  color?: "inherit" | "primary" | "secondary";
  variant?: "buffer" | "determinate" | "indeterminate" | "query";
}
const LineProgress: React.FC<LinearProgressProps> = ({
  style,
  classes,
  color,
  variant,
}) => {
  return (
    <Box sx={style}>
      <MuiLinearProgress
        classes={classes}
        color={color}
        variant={variant}
        value={40}
        valueBuffer={34}
      />
    </Box>
  );
};

export default LineProgress;
