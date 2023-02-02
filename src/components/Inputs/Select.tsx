import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MuiSelect from "@mui/material/Select";

interface Selection {
  name: string;
  value: string;
}
interface SelectProps {
  onChange: () => void;
  title: string;
  defaultValue?: string;
  selection: Selection[];
  classes?: string;
}
const Select: React.FC<SelectProps> = ({
  onChange,
  title,
  defaultValue,
  selection,
  classes,
}) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <MuiSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={defaultValue}
          label="Age"
          onChange={onChange}
          className={classes}
        >
          {selection.map((select) => {
            return (
              <MenuItem value={select.value} key={select.value}>
                {select.name}
              </MenuItem>
            );
          })}
        </MuiSelect>
      </FormControl>
    </Box>
  );
};

export default Select;
