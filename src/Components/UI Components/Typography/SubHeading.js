import React from "react";
import classes from "./Typography_Style/SubHeading.module.scss";

const SubHeading = (props) => {
  return (
    <h3
      className={classes?.SubHeading}
      style={{ ...props.style, fontWeight: props.fontWeight }}
    >
      {props.text || props.children}
    </h3>
  );
};

export default SubHeading;
