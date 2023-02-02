import { ReactNode } from "react";
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";
interface BottomNavigationActionProps {
  label: string;
  icon: ReactNode;
}

const BottomNavigationAction: React.FC<BottomNavigationActionProps> = ({
  label,
  icon,
}) => {
  return <MuiBottomNavigationAction label={label} icon={icon} />;
};

export default BottomNavigationAction;
