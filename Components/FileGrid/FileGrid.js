import React from "react";
import FileTable from "../FileTable/FileTable";
import { useStyles } from "./FileGrid.style";

const FileGrid = () => {
  const styles = useStyles();

  return (
    <div style={{ height: "75vh", width: "100%", overflowY: "scroll" }}>
      <FileTable />
    </div>
  );
};

export default FileGrid;
