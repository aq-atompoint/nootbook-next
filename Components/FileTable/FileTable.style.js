import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  tableRoot: {
    width: "100%",
    borderSpacing: 0,
    borderCollapse: "separate",
    borderRight: "1px solid #F98190",
    borderLeft: "1px solid #F98190",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    "& tr:first-child th:first-child": {
      borderTopLeftRadius: "8px",
    },
    "& tr:first-child th:last-child": {
      borderTopRightRadius: "8px",
    },
  },
  tableHeader: {
    backgroundColor: "#F98190",
    borderTopRightRadius: "10px",
    color: "white",
  },
  tableHeadeCell: {
    padding: theme.spacing(1, 0),
    "&:nth-child(1)": {},
    "&:nth-child(2)": {
      padding: theme.spacing(1, 2),
      "& img": {
        maxWidth: "100%",
      },
    },
    "&:nth-child(3)": { textAlign: "right", paddingRight: "15px" },
    "&:nth-child(4)": {},
    "&:nth-child(5)": {
      textAlign: "center",
    },
    "&:nth-child(6)": {
      textAlign: "center",
    },
  },
  dataCell: {
    padding: theme.spacing(1, 0),
    borderBottom: "1px solid #F98190",
    "&:nth-child(1)": {
      width: "50px",
      textAlign: "center",
    },
    "&:nth-child(2)": {
      width: "50px",
      padding: theme.spacing(1, 2),
      "& img": {
        maxWidth: "100%",
      },
    },
    "&:nth-child(3)": {
      maxWidth: "100%",
    },
    "&:nth-child(4)": {
      width: "100px",
    },
    "&:nth-child(5)": {
      width: "100px",
    },
  },
}));
