import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MuiSlider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

interface SliderProps {
  value: number;
}
const Slider: React.FC<SliderProps> = ({ value: originalValue }) => {
  const [value, setValue] = useState<number>(originalValue);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <MuiSlider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
    </Box>
  );
};

export default Slider;
