import MuiDivider from "@mui/material/Divider";
interface DividerProps {
  classes: object;
  orientation?: "horizontal" | "vertical";
  variant?: "fullWidth" | "inset" | "middle";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
}
const Divider: React.FC<DividerProps> = ({
  classes,
  orientation = "horizontal",
  variant = "fullWidth",
  color = "info",
}) => {
  return (
    <div style={classes}>
      <MuiDivider orientation={orientation} variant={variant} color={color} />
    </div>
  );
};

export default Divider;
