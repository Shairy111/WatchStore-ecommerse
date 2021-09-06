import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import Hidden from "@material-ui/core/Hidden";

import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Link } from "gatsby";
import theme from "./theme";

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "capitalize",
  },

  tabsFont: {
    fontFamily: "Playfair Display",
  },

  IconButton: {
    marginLeft: "auto",
  },
  headerTabs: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

function Header({ siteTitle }) {
  const classes = useStyles();
  const matchesSM = useMediaQuery(() => theme.breakpoints.down("sm"));
  // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const links = ["brands", "categories", "contact us", "About us"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = (
    <Tabs value={value} onChange={handleChange} className={classes.headerTabs}>
      {links.map((link) => {
        return <Tab className={classes.tabsFont} label={link} />;
      })}
    </Tabs>
  );

  const drawer = (
    <SwipeableDrawer
      open={drawerOpen}
      onOpen={() => {
        setDrawerOpen(true);
      }}
      onClose={() => {
        setDrawerOpen(false);
      }}>
      <List>
        {links.map((link, i) => {
          return (
            <ListItem button key={i}>
              <ListItemText primary={link} />
            </ListItem>
          );
        })}
      </List>
    </SwipeableDrawer>
  );
  return (
    <header>
      <AppBar elevation={0}>
        <Toolbar>
          <Button>
            <Typography variant="h1" classes={{ root: classes.root }}>
              WatchStore
            </Typography>
          </Button>

          {matchesSM ? drawer : tabs}
          <div className={classes.IconButton}>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>

            {/* {
              matchesSM ? <IconButton onClick> <MenuIcon/></IconButton> :  <IconButton>
            
            </IconButton>
            } */}

            <IconButton
              onClick={() => (matchesSM ? setDrawerOpen(true) : null)}>
              {matchesSM ? <MenuIcon /> : <AccountCircleIcon />}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;

{
  /* <Tab className={classes.tabsFont} label="brands" />
            <Tab  className={classes.tabsFont} label="categories" />
            <Tab className={classes.tabsFont} label="contact us" />
            <Tab className={classes.tabsFont} label="About us" /> */
}
