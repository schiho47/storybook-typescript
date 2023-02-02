import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MuiSwitch from "@mui/material/Switch";

interface SwitchProps {
  label: string;
  defaultCheck: boolean;
  onChange: () => void;
  color:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
}

const Switch: React.FC<SwitchProps> = ({
  label,
  defaultCheck,
  onChange,
  color,
}) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<MuiSwitch defaultChecked={defaultCheck} />}
        label={label}
        onChange={onChange}
        color={color}
      />
    </FormGroup>
  );
};

export default Switch;
