import {
  Button as MuiButton,
  ButtonGroup as MuiButtonGroup,
  ButtonGroupProps as MuiButtonGroupProps,
} from "@mui/material";

interface ButtonGroupProps extends MuiButtonGroupProps {
  variant: "text" | "contained" | "outlined" | undefined;
  buttonOne: string;
  buttonTwo: string;
  buttonThree: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  variant,
  buttonOne,
  buttonTwo,
  buttonThree,
  color,
}) => (
  <MuiButtonGroup variant={variant} color={color}>
    <MuiButton>{buttonOne}</MuiButton>
    <MuiButton>{buttonTwo}</MuiButton>
    <MuiButton>{buttonThree}</MuiButton>
  </MuiButtonGroup>
);

export default ButtonGroup;
