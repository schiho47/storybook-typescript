import MuiCircularProgress, {
  circularProgressClasses,
  CircularProgressProps as MuiCircularProgressProps,
} from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

interface CircularProgressProps extends MuiCircularProgressProps {
  size?: number;
  thickness?: number;
  animationDuration?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 40,
  thickness = 4,
  animationDuration = "900ms",
  ...others
}) => {
  return (
    <Box sx={{ position: "relative" }}>
      <MuiCircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={size}
        thickness={thickness}
        {...others}
        value={100}
      />
      <MuiCircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
          animationDuration: { animationDuration },
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={size}
        thickness={thickness}
        {...others}
      />
    </Box>
  );
};

export default CircularProgress;
