import { ReactElement } from "react";
import MuiSnackbar from "@mui/material/Snackbar";

interface MuiSnackbarProps {
  open: boolean;
  onClose: () => void;
  children: ReactElement;
  autoHideDuration?: number;
}
const Snackbar: React.FC<MuiSnackbarProps> = ({
  open,
  onClose,
  autoHideDuration = 6000,
  children,
}) => {
  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      {children}
    </MuiSnackbar>
  );
};

export default Snackbar;
