import React from "react";
import classes from "./NavItem.module.scss";
function NavItem(props) {
  return (
    <li className={classes.NavItem}>
      <button onClick={props.clicked}>{props.text || props.children}</button>
    </li>
  );
}

export default NavItem;
