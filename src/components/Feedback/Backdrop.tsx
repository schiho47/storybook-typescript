import { ReactNode } from "react";

import MuiBackdrop from "@mui/material/Backdrop";

interface BackdropProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  classes?: object;
}
const Backdrop: React.FC<BackdropProps> = ({
  open,
  onClose,
  children,
  classes,
}) => {
  return (
    <div>
      <MuiBackdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={onClose}
        classes={classes}
      >
        {children}
      </MuiBackdrop>
    </div>
  );
};

export default Backdrop;
