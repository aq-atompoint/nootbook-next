import { ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import theme from "../assets/theme";
import Siderbar from "../Components/Siderbar";

export const useStyles = makeStyles((theme) => ({
  rootStyle: {
    backgroundColor: "#fde1de",
  },
  mainContent: { marginLeft: "130px", padding: theme.spacing(3) },
}));

export default function Layout({ children }) {
  const styles = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={styles.rootStyle}>
          <Siderbar />
          <main className={styles.mainContent}>{children}</main>
        </main>
      </ThemeProvider>
    </>
  );
}
