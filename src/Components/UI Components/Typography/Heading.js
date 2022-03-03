import React from "react";
import classes from "./Typography_Style/Heading.module.scss";

const Heading = (props) => {
  return (
    <h1 className={classes?.Heading} style={props.style}>
      {props.text || props.children}
    </h1>
  );
};

export default Heading;
