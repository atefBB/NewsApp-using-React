import React from "react";

import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";

import classes from "./Layout.module.css";

export default function Layout(props) {
  const [showSideDrawer, setShowSideDrawer] = React.useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevState) => {
      return !prevState;
    });
  };

  return (
    <React.Fragment>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} clsed={sideDrawerClosedHandler} />

      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
}
