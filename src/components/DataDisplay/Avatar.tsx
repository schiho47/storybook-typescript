import { ReactNode } from "react";
import MuiAvatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

interface AvatarProps {
  isImageAvatar: boolean;
  alt?: string;
  color?: string;
  imageSrc?: string;
  children?: ReactNode;
}

const Avatar: React.FC<AvatarProps> = ({
  isImageAvatar,
  alt,
  color,
  imageSrc,
  children,
}) => {
  return (
    <Stack direction="row" spacing={2}>
      {isImageAvatar && <MuiAvatar alt={alt} src={imageSrc} />}
      {!isImageAvatar && (
        <MuiAvatar sx={{ bgcolor: color }}>{children}</MuiAvatar>
      )}
    </Stack>
  );
};

export default Avatar;
