import MuiChip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface ChipProps {
  label: string;
  variant?: "outlined" | "filled";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
}
const Chip: React.FC<ChipProps> = ({ label, variant = "outlined" }) => {
  return (
    <Stack direction="row" spacing={1}>
      <MuiChip label={label} variant={variant} />
    </Stack>
  );
};

export default Chip;
