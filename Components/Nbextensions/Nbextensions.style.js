import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {},
  extensionsHeader: {
    marginBottom: theme.spacing(2),
  },
  filterSection: {
    border: "2px solid #F4253E",
    borderRadius: "8px",
    display: "flex",
    width: "100%",
    "& span": {
      backgroundColor: "#F9808F",
      padding: theme.spacing(1, 3),
      display: "inline-block",
      "& img": {
        display: "inline-block",
        marginLeft: theme.spacing(2),
        width: "12px",
      },
    },
    "& input": {
      border: "none",
      width: "300px",
      paddingLeft: theme.spacing(2),
    },
    "& input:focus": {
      outline: "none",
    },
  },
  gridContainer: {
    marginTop: theme.spacing(2),
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "8px",
    alignItems: "center",
  },
  gridItem: {
    display: "flex",
    alignItems: "center",
    "& span": {
      marginLeft: theme.spacing(1),
    },
    "& img": {
      width: "16px",
    },
  },
}));
