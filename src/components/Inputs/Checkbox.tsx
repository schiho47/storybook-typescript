import FormControlLabel from "@mui/material/FormControlLabel";
import MuiCheckbox from "@mui/material/Checkbox";

interface CheckboxProps {
  label: string;
  onChange: () => void;
  classes?: object;
  value: string;
  id: string;
  checked: boolean;
}
const Checkbox: React.FC<CheckboxProps> = ({
  label,
  onChange,
  classes,
  value,
  id,
  checked,
}) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          checked={checked}
          onChange={onChange}
          classes={classes}
          value={value}
          id={id}
        />
      }
      label={label}
    />
  );
};

export default Checkbox;
