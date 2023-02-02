import Radio from "@mui/material/Radio";
import MuiRadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface RadioGroupProps {
  title: string;
  labelOne: string;
  labelTwo: string;
  labelThree: string;
  valueOne: string;
  valueTwo: string;
  valueThree: string;
  defaultValue?: string;
  radioName: string;
  groupId: string;
  onChange: () => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  title,
  labelOne,
  labelTwo,
  labelThree,
  valueOne,
  valueTwo,
  valueThree,
  defaultValue = "",
  radioName,
  groupId,
  onChange,
}) => {
  return (
    <FormControl>
      <FormLabel id={groupId}>{title}</FormLabel>
      <MuiRadioGroup
        aria-labelledby={groupId}
        defaultValue={defaultValue}
        name={radioName}
        onChange={onChange}
      >
        <FormControlLabel
          value={valueOne}
          control={<Radio />}
          label={labelOne}
        />
        <FormControlLabel
          value={valueTwo}
          control={<Radio />}
          label={labelTwo}
        />
        <FormControlLabel
          value={valueThree}
          control={<Radio />}
          label={labelThree}
        />
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
