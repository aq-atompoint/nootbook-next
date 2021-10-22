import React from "react";
import { Box, Drawer, makeStyles, Typography } from "@material-ui/core";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import folderIcon from "../assets/images/folder.png";
import logoutIcon from "../assets/images/logout.png";

export const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: "130px",
    backgroundColor: "white",
    height: "100%",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
  },
  drawerContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  logoWrapper: {
    marginTop: theme.spacing(2),
  },
  folderIconWrapper: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(5, "auto", 0),
  },
  folderIcon: {
    margin: theme.spacing(5, "auto", 0),
  },
  logoutWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: theme.spacing(5),
  },
}));

const Siderbar = () => {
  const styles = useStyles();
  return (
    <div>
      <Drawer
        className={styles.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: styles.drawerPaper,
        }}
      >
        <Box className={styles.drawerContent}>
          <Box className={styles.logoWrapper}>
            <Image src={logo} alt="logo" />
          </Box>
          <Box className={styles.folderIconWrapper}>
            <Image
              width={30}
              className={styles.folderIcon}
              src={folderIcon}
              alt="logo"
            />
          </Box>
          <Box className={styles.logoutWrapper}>
            <Image
              width={30}
              className={styles.logoutIcon}
              src={folderIcon}
              alt="logo"
            />
            <Typography>Logout</Typography>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default Siderbar;
