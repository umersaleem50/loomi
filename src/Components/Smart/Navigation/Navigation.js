import React, { useState } from "react";

import classes from "./Navigation.module.scss";
import Logo from "../../UI Components/Logo/Logo";
import Navbar from "./Navbar/Navbar";
import Overlay from "../../UI Components/Overlay/Overlay";

const Navigation = (props) => {
  return (
    <React.Fragment>
      <div className={classes.Navigation}>
        <Logo />
        <Navbar />
        <div>dummy text</div>
      </div>
      <Overlay isVisible />
    </React.Fragment>
  );
};

export default Navigation;
