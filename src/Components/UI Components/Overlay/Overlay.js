import React from "react";
import classes from "./Overlay.module.scss";
function Overlay(props) {
  return (
    <div
      className={classes.Overlay}
      style={{ display: props.isVisible ? "inline-block" : "none" }}
    >
      {/* Overlay */}
    </div>
  );
}

export default Overlay;
