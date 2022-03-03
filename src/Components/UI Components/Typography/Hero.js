import React from "react";
import classes from "./Typography_Style/Hero.module.scss";

const Hero = (props) => {
  return (
    <h1 className={classes?.Hero} style={props.style}>
      {props.text || props.children}
    </h1>
  );
};

export default Hero;
