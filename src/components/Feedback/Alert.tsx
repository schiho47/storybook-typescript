import { ReactNode } from "react";
import MuiAlert from "@mui/material/Alert";

interface AlertProps {
  open: boolean;
  severity: "error" | "info" | "success" | "warning";
  color: "error" | "info" | "success" | "warning";
  onClose: () => void;
  content: string;
  icon?: ReactNode;
}
const Alert: React.FC<AlertProps> = ({
  open,
  severity,
  color,
  onClose,
  icon,
  content,
}) => {
  return open ? (
    <MuiAlert severity={severity} color={color} onClose={onClose} icon={icon}>
      {content}
    </MuiAlert>
  ) : (
    <div></div>
  );
};

export default Alert;
