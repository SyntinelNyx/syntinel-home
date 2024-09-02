import { Theme, ThemeOptions, createTheme } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#738ec1",
      light: "#a1b9e2",
      dark: "#4a546d",
      contrastText: "#000000",
    },
    secondary: {
      main: "#da3c3f",
    },
    background: {
      default: "#edf2fb",
      paper: "#e2eafc",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: "Zilla Slab",
  },
};

const defaultTheme: Theme = createTheme(themeOptions);

export default defaultTheme;
