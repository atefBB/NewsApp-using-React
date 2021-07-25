import React from "react";

import Logo from "../Logo/Logo";
import DrawerToggle from "../DrawerToggle/DrawerToggle";

import classes from "./Toolbar.module.css";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
  </header>
);

export default toolbar;
