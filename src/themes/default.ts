import { Theme, ThemeOptions, createTheme } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#e5f7e3",
    },
    secondary: {
      main: "#4f3cda",
    },
    background: {
      default: "#000000",
      paper: "#272727",
    },
    text: {
      primary: "#e5f7e3",
    },
  },
  typography: {
    fontFamily: "Zilla Slab",
  },
};

const defaultTheme: Theme = createTheme(themeOptions);

export default defaultTheme;
