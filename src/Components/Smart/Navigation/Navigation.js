import React from "react";

import classes from "./Navigation.module.scss";
import Logo from "../../UI Components/Logo/Logo";

const Navigation = (props) => {
  return (
    <nav className={classes.Navigation}>
      <Logo />
    </nav>
  );
};

export default Navigation;
