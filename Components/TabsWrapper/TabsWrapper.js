import React from "react";
import { Box, Tabs, Tab, Typography } from "@material-ui/core";
import { useStyles } from "./TabsWrapper.style";
import FileGrid from "../FileGrid/FileGrid";

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
        tabTitle={"Select items to perform actions on them."}
        value={value}
        index={1}
      >
        Item Two
      </TabPanel>
      <TabPanel
        tabTitle={"Select items to perform actions on them."}
        value={value}
        index={2}
      >
        Item Three
      </TabPanel>
      <TabPanel
        tabTitle={"Select items to perform actions on them."}
        value={value}
        index={3}
      >
        Item Three
      </TabPanel>
    </div>
  );
};

export default TabsWrapper;
