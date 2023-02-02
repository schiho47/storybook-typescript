import { createTheme, darken } from "@mui/material";
import { orange, yellow, brown } from "@mui/material/colors";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
const font = `'Noto Sans TC', Roboto, sans-serif`;
export const theme = createTheme({
  typography: {
    fontFamily: font,
  },
  palette: {
    primary: {
      main: orange["A200"],
    },
    secondary: {
      main: yellow["A400"],
    },
    info: {
      main: brown["A400"],
    },
    // background: {
    //   default: blueGrey["800"],
    //   paper: blueGrey["700"],
    // },
    error: {
      dark: darken("#B00020", 0.3),
      main: "#B00020",
      lighter: "#CF6679",
      light: "#CF6679",
    },
  },
});

export default theme;
