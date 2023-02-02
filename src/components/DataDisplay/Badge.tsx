import { ReactNode } from "react";
import MuiBadge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const StyledBadge = styled(MuiBadge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

interface BadgeComponentProps extends BadgeProps {
  label: ReactNode;
  alt: string;
  count: number;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  classes?: object;
}
const Badge: React.FC<BadgeComponentProps> = ({
  label,
  alt,
  color = "secondary",
  count,
  classes,
}) => {
  return (
    <IconButton aria-label={alt}>
      <StyledBadge badgeContent={count} color={color}>
        {label}
      </StyledBadge>
    </IconButton>
  );
};

export default Badge;
