import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#65E4A3",
      light: "#fff",
    },
    secondary: {
      main: "#0A2640",
      light: "#f1f1f1",
    },
    info: {
      main: "#888888",
    },
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 30,
  },
});
export default theme;
