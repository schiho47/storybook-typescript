import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

interface ButtonProps extends MuiButtonProps {
  label: string;
  variant: "contained" | "outlined" | "text";
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "outlined",
  ...rest
}: ButtonProps) => (
  <MuiButton {...rest} variant={variant}>
    {label}
  </MuiButton>
);

export default Button;
