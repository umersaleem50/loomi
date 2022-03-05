import React from "react";

import classes from "./NavContainer.module.scss";

const NavContainer = (props) => {
  const WrapperElement = props.element;
  const container = props.toggle ? (
    <div className={classes.NavContainer}>
      <WrapperElement />
    </div>
  ) : null;
  return container;
};

export default NavContainer;
