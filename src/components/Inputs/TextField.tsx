import Box from "@mui/material/Box";
import MuiTextField from "@mui/material/TextField";

interface TextFieldProps {
  required: boolean;
  disabled: boolean;
  error: boolean;
  id: string;
  label: string;
  variant: "filled" | "outlined" | "standard";
  color: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  onChange: () => void;
  defaultValue?: string;
  classes?: object;
  helperText?: string;
}
const TextField: React.FC<TextFieldProps> = ({
  required,
  disabled,
  error,
  id='textarea',
  label,
  variant,
  color,
  onChange,
  defaultValue,
  classes,
  helperText,
}) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <MuiTextField
        disabled={disabled}
        error={error}
        required={required}
        id={id}
        label={label}
        defaultValue={defaultValue}
        variant={variant}
        classes={classes}
        onChange={onChange}
        color={color}
        helperText={helperText}
      />
    </Box>
  );
};

export default TextField;
