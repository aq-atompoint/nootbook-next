import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {},
  terminalRoot: {
    marginBottom: theme.spacing(2),
    border: "1px solid #F98190",
  },
  leftAlign: {
    textAlign: "left",
  },
  centerAlign: {
    textAlign: "center",
  },
  rightAlign: {
    textAlign: "right",
  },
  clusterHeader: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    justifyContent: "space-between",
    backgroundColor: "#F98190",
    padding: theme.spacing(1.5, 3),
  },
  clusterDetails: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    justifyContent: "space-between",
    padding: theme.spacing(1.5, 3),
    borderTop: "1px solid #F98190",
    "& input": {
      width: "40%",
      border: "1px solid #F98190",
    },
    "& input:focus": {
      width: "40%",
      outline: "none",
    },
  },
  inputContainer: {
    textAlign: "center",
  },
  buttonStart: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    border: "none",
    padding: theme.spacing(0.5, 1),
    borderRadius: "4px",
  },
}));
