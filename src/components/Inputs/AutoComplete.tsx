import React from "react";
import TextField from "@mui/material/TextField";
import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
} from "@mui/material";

interface AutoCompleteProps {
  options: string[];
  id: string;
  label: string;
  onChange: () => void;
  open?: boolean;
}
const AutoComplete: React.FC<AutoCompleteProps> = ({
  options,
  id,
  label,
  onChange,
  open,
  ...rest
}) => {
  return (
    <MuiAutocomplete
      disablePortal
      id={id}
      options={options}
      sx={{ width: 300 }}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} label={label} />}
      {...rest}
    />
  );
};

export default AutoComplete;

// import React from "react";
// import TextField from "@mui/material/TextField";
// import {
//   Autocomplete as MuiAutocomplete,
//   AutocompleteProps as MuiAutocompleteProps,
// } from "@mui/material";

// interface AutoCompleteProps<T> {
//   muiAutoCompleteProps?: MuiAutocompleteProps<
//     T,
//     boolean | undefined,
//     boolean | undefined,
//     boolean | undefined
//   >;
//   options: string[];
//   id: string;
//   label: string;
// }
// const AutoComplete = <T,>(props: AutoCompleteProps<T>) => {
//   const { options, id, label, ...rest } = props;
//   return (
//     <MuiAutocomplete
//       disablePortal
//       id={id}
//       options={options}
//       sx={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label={label} />}
//       {...rest}
//     />
//   );
// };

// export default AutoComplete;
