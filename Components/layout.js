import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../assets/theme";

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
}
