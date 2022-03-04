import React from "react";

import classes from "./Navigation.module.scss";
import Logo from "../../UI Components/Logo/Logo";
import Navbar from "./Navbar/Navbar";

const Navigation = (props) => {
  return (
    <div className={classes.Navigation}>
      <Logo />
      <Navbar />
      <div>dummy text</div>
    </div>
  );
};

export default Navigation;
