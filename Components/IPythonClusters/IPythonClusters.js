import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./IPythonClusters.style";

const IPythonClusters = () => {
  const styles = useStyles();

  return (
    <Box style={{ height: "75vh", width: "100%" }}>
      <Box className={styles.root}>
        <Box className={styles.terminalRoot}>
          <Box className={styles.clusterHeader}>
            <Box className={styles.leftAlign}>Terminal </Box>
            <Box className={styles.centerAlign}>Status</Box>
            <Box className={styles.centerAlign}># of engines</Box>
            <Box className={styles.rightAlign}>Action</Box>
          </Box>
          <Box className={styles.clusterDetails}>
            <Box className={styles.leftAlign}>Default</Box>
            <Box className={styles.centerAlign}>Stopped</Box>
            <Box
              className={[styles.inputContainer, styles.centerAlign].join(" ")}
            >
              <input type="text" />
            </Box>
            <Box className={styles.rightAlign}>
              <button className={styles.buttonStart}>Start</button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IPythonClusters;
