import Box from "@mui/material/Box";
import MuiSkeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import Typography from "../DataDisplay/Typography";

// interface SkeletonDataType {
//   src: string;
//   title: string;
//   channel: string;
//   views: string;
//   createdAt: string;
// }
interface SkeletonProps {
  style: object;
  src: string;
  title: string;
  channel: string;
  views: string;
  createdAt: string;
  variant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
}
const Skeleton: React.FC<SkeletonProps> = ({
  style,
  src,
  title,
  channel,
  views,
  createdAt,
  variant = "caption",
  color = "primary",
}) => {
  return (
    <Box sx={style}>
      <Grid container wrap="nowrap">
        <Box sx={{ pr: 2 }}>
          {src ? (
            <img
              style={{ width: "100%", height: 118, objectFit: "contain" }}
              alt={title}
              src={src}
            />
          ) : (
            <MuiSkeleton variant="rectangular" width={210} height={118} />
          )}
          <div style={{ wordWrap: "break-word", marginTop: "0.5rem" }}>
            <Typography gutterBottom variant="body2">
              {title}
            </Typography>
            <Typography variant={variant} color={color}>
              {channel}
            </Typography>

            <Typography
              variant={variant}
              color={color}
              styles={{ marginLeft: "1rem", border: "1px " }}
            >
              {`${views} • ${createdAt}`}
            </Typography>
          </div>
        </Box>
      </Grid>
    </Box>
  );
};

export default Skeleton;
