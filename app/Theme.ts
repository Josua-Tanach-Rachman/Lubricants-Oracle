import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { colors } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#139343",
    },
    secondary: {
      main: "#d30068",
    },
  },
  typography: {
    fontFamily: "'Roboto Condensed', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    subtitle1: { fontWeight: 400 },
    body1: { fontSize: "14px" },
  },
});
