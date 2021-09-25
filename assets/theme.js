import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        light: "#FDE1DE",
        main: "#F4253E",
      },
    },
  })
);

export default theme;
