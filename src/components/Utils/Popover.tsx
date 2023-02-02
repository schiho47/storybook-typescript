import * as React from "react";
import MuiPopover from "@mui/material/Popover";
import Typography from "../DataDisplay/Typography";
import Button from "../Inputs/Button";

interface PopoverProps {
  label: string;
  content: string;
}
const Popover: React.FC<PopoverProps> = ({ label, content }) => {
  const [anchorEl, setAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button label={label} variant="contained" onClick={handleClick} id={id} />
      <MuiPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography variant="body1" sx={{ p: 2 }}>
          {content}
        </Typography>
      </MuiPopover>
    </div>
  );
};

export default Popover;
