import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface MediaCardProps {
  src: string;
  title: string;
  content: string;
  footer: React.ReactNode;
}
const MediaCard: React.FC<MediaCardProps> = ({
  src,
  title,
  content,
  footer,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={src} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>{footer}</CardActions>
    </Card>
  );
};

export default MediaCard;
