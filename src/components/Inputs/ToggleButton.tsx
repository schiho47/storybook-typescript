import { useState } from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import MuiToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

interface ToggleButtonProps {
  onChange: () => void;
  onClick?: () => void;
  classes?: object;
  color?:
    | "standard"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
}
const ToggleButton: React.FC<ToggleButtonProps> = ({
  onChange,
  onClick,
  classes,
  color,
}) => {
  const [alignment, setAlignment] = useState<string | null>("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <MuiToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </MuiToggleButton>
      <MuiToggleButton value="center" aria-label="centered">
        <FormatAlignCenterIcon />
      </MuiToggleButton>
      <MuiToggleButton value="right" aria-label="right aligned">
        <FormatAlignRightIcon />
      </MuiToggleButton>
      <MuiToggleButton value="justify" aria-label="justified" disabled>
        <FormatAlignJustifyIcon />
      </MuiToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleButton;
