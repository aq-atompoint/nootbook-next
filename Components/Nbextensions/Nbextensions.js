import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./Nbextensions.style";
import Image from "next/image";
import icon from "../../assets/images/gridIcon.png";
import filterIcon from "../../assets/images/filter.png";

const Nbextensions = () => {
  const styles = useStyles();
  const [filter, setFilter] = useState("");

  const gridData = [
    "AutoSaveTime",
    "Autoscroll",
    "Cell Filter",
    "Exercise2",
    "Codefolding in Editor",
    "AddBefore",
    "Hide Header",
    "Isort formatter",
    "ExecuteTime",
    "Cell Filter",
    "Exercise2",
    "Codefolding in Editor",
    "AddBefore",
    "Hide Header",
    "Cell Filter",
    "Exercise2",
    "Codefolding in Editor",
    "AddBefore",
    "Hide Header",
    "Cell Filter",
    "Exercise2",
    "Codefolding in Editor",
    "AddBefore",
    "Hide Header",
  ];

  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  const lowercasedFilter = filter.toLowerCase();
  const filteredData = gridData.filter((item) => {
    return item.toLowerCase().includes(lowercasedFilter);
  });

  return (
    <Box style={{ height: "75vh", width: "100%" }}>
      <Box className={styles.root}>
        <Box className={styles.extensionsRoot}>
          <Box className={styles.extensionsHeader}>
            <input type="checkbox" />
            Disable configuration for nbextensions without compatibility ( they
            may break your notebook environment, but can be useful for
            nbextensions development)
          </Box>
          <Box className={styles.filterSection}>
            <Box>
              <Box component="span">
                Filter <Image src={filterIcon} alt="filter icon" />
              </Box>
              <input
                type="text"
                placeholder="by description, section, or tags"
                onChange={handleChange}
              />
            </Box>
          </Box>
          <Box className={styles.gridContainer}>
            {filteredData.map((item, index) => (
              <Box key={`item-${index}`} className={styles.gridItem}>
                <Image src={icon} alt="icon" />
                <Box component="span">{item}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Nbextensions;
