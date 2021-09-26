import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  tabsRoot: {
    backgroundColor: "transparent",
    "& .Mui-selected": {
      background: theme.palette.primary.main,
      color: "white",
    },
    "& .MuiTab-root": {
      padding: theme.spacing(1, 2),
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      minWidth: "auto",
    },
  },
  tabTitle: {
    background: theme.palette.primary.main,
    color: "white",
    padding: theme.spacing(1, 2),
  },
  tabContentRoot: {
    backgroundColor: "white",
    padding: theme.spacing(2),
  },
  mainContent: { marginLeft: "130px", padding: theme.spacing(3) },
}));
