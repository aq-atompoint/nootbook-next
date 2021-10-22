import React from "react";
import { Box, Tabs, Tab, Typography } from "@material-ui/core";
import { useStyles } from "./TabsWrapper.style";
import FileGrid from "../FileGrid/FileGrid";
import RunningProcess from "../RunningProcess/RunningProcess";
import IPythonClusters from "../IPythonClusters/IPythonClusters";
import Nbextensions from "../Nbextensions/Nbextensions";

const TabsWrapper = () => {
  const [value, setValue] = React.useState(0);
  const styles = useStyles();

  function TabPanel(props) {
    const { children, value, index, tabTitle, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <>
            <Box className={styles.tabTitle}>{tabTitle}</Box>
            <Box className={styles.tabContentRoot}>
              <Box>{children}</Box>
            </Box>
          </>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="tabs"
        className={styles.tabsRoot}
        TabIndicatorProps={{ style: { display: "none" } }}
      >
        <Tab label="File" {...a11yProps(0)} />
        <Tab label="Running" {...a11yProps(1)} />
        <Tab label="IPython Clusters" {...a11yProps(2)} />
        <Tab label="Nbextensions" {...a11yProps(3)} />
      </Tabs>

      <TabPanel
        tabTitle={"Select items to perform actions on them."}
        value={value}
        index={0}
      >
        <FileGrid />
      </TabPanel>
      <TabPanel
        tabTitle={"Currently running Jupyter processes "}
        value={value}
        index={1}
      >
        <RunningProcess />
      </TabPanel>
      <TabPanel
        tabTitle={"IPython parallel computing clusters"}
        value={value}
        index={2}
      >
        <IPythonClusters />
      </TabPanel>
      <TabPanel tabTitle={"Configurable nbextensions"} value={value} index={3}>
        <Nbextensions />
      </TabPanel>
      <button className={styles.quitButton}>Quit</button>
    </div>
  );
};

export default TabsWrapper;
