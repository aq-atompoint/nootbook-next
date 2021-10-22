import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {},
  terminalRoot: {
    marginBottom: theme.spacing(2),
    border: "1px solid #F98190",
  },
  terminalHeader: {
    backgroundColor: "#F98190",
    padding: theme.spacing(1.5, 3),
    "& img": {
      width: "15px",
    },
  },
  terminalDetails: {
    padding: theme.spacing(1.5, 3),
    borderTop: "1px solid #F98190",
  },
}));
