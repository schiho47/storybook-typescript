import Box from "@mui/material/Box";
import MuiRating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

interface RatingProps {
  title: string;
  classes?: object;
  value: number;
  onChange: () => void;
  max: number;
}
const Rating: React.FC<RatingProps> = ({
  title,
  classes,
  value,
  onChange,
  max,
}) => {
  return (
    <Box>
      <Typography component="legend">{title}</Typography>
      <MuiRating
        name={`customized-${max}`}
        value={value}
        onChange={onChange}
        style={classes}
        max={max}
      />
    </Box>
  );
};

export default Rating;
