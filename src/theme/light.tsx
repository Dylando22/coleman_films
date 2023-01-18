import { createTheme } from "@mui/material";
// You can find readable color examples at https://mui.com/material-ui/customization/color/#main-content
import { grey } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    common: {
      black: "#000", //text thats black on light mode
      white: "#fff", //text thats white on light mode
    },
    primary: {
      light: "",
      dark: grey[800], //none
      main: "#000", //main color background
    },
    secondary: {
      light: grey[50], //none
      dark: grey[600], //searchBar Background
      main: grey[800], //CardBackground
    },
    // error: {
    //   // light: "",
    //   // dark: "",
    //   // main: grey[400],
    // },
    // warning: {
    //   // light: "",
    //   // dark: "",
    //   // main: grey[400],
    // },
    // info: {
    //   // light: "",
    //   // dark: "",
    //   // main: grey[400],
    // },
    // success: {
    //   // light: "",
    //   // dark: "",
    //   // main: grey[400],
    // },
    // background: {
    //   // paper: "",
    //   // default: "",
    // },
  },
});
