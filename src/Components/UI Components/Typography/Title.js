import React from "react";
import classes from "./Typography_Style/Title.module.scss";

const Title = (props) => {
  return (
    <h1 className={classes?.Title} style={props.style}>
      {props.text || props.children}
    </h1>
  );
};

export default Title;
