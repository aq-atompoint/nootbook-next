import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./RunningProcess.style";
import Image from "next/image";
import downArrow from "../../assets/images/downArrow.png";
import { style } from "dom-helpers";

const RunningProcess = () => {
  const styles = useStyles();

  return (
    <Box style={{ height: "75vh", width: "100%" }}>
      <Box className={styles.root}>
        <Box className={styles.terminalRoot}>
          <Box className={styles.terminalHeader}>
            Terminal <Image src={downArrow} alt="Down Arrow" />{" "}
          </Box>
          <Box className={styles.terminalDetails}>
            There are no terminals running.
          </Box>
        </Box>
        <Box className={styles.terminalRoot}>
          <Box className={styles.terminalHeader}>
            Notebooks <Image src={downArrow} alt="Down Arrow" />{" "}
          </Box>
          <Box className={styles.terminalDetails}>
            There are no notebooks running.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RunningProcess;
