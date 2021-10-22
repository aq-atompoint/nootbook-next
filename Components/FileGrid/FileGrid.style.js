import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  dataGrid: {
    "& .MuiDataGrid-columnsContainer": {
      color: "white",
      backgroundColor: "#F98190",
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px",
    },
  },
}));
