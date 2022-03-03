import React from "react";
import { Link } from "react-router-dom";
import classes from "./Logo.module.scss";

const Logo = (props) => {
  return (
    <Link to="/test" className={classes.Logo}>
      <span>l</span>oomi
    </Link>
  );
};

export default Logo;
