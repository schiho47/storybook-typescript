import { ReactNode } from "react";
import Fab from "@mui/material/Fab";

interface FloatingButtonProps {
  color:
    | "default"
    | "error"
    | "info"
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
  onClick: () => void;
  children: ReactNode;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      <Fab color={color} onClick={onClick}>
        {children}
      </Fab>
    </div>
  );
};

export default FloatingButton;
