import { createTheme, responsiveFontSizes } from "@mui/material/styles";
let theme = createTheme({
  palette: {
    primary: {
      main: "#a3238e",
    },
    secondary: {
      main: "#e0e5e1",
    },
  },
});

theme = responsiveFontSizes(theme);

export const muiTheme = theme;
