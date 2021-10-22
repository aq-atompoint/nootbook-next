import React from "react";
import { Box, Tabs, Tab, Typography } from "@material-ui/core";
import Image from "next/image";
import python from "../../assets/images/python.png";
import { SaveIcon, DocumentIcon, PlayIcon } from "../../assets/SvgIcons";
import { useStyles } from "./HomeTabs.style";

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
            <Box className={styles.tabTitle}>
              <SaveIcon />
              <DocumentIcon />
              <PlayIcon />
              {tabTitle}
            </Box>
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

  const pythonImage = <Image src={python} alt="" />;

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
        <Tab label=" Untitled1" icon={pythonImage} {...a11yProps(0)} />
        <Tab label=" Untitled2" icon={pythonImage} {...a11yProps(1)} />
        <Tab label=" Untitled3" icon={pythonImage} {...a11yProps(2)} />
      </Tabs>

      <TabPanel tabTitle={"Hello"} value={value} index={0}></TabPanel>
      <TabPanel tabTitle={"Untitled2"} value={value} index={1}></TabPanel>
      <TabPanel tabTitle={"Untitled3"} value={value} index={2}></TabPanel>
    </div>
  );
};

export default TabsWrapper;
