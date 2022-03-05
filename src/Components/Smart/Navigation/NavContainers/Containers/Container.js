import React from "react";
import classes from "./Container.module.scss";
function Container(props) {
  return (
    <figure className={classes.Container}>
      <div className={classes.offer}>
        {props.offerSrc && <img src={props.offerSrc} alt="New Offer" />}
      </div>
    </figure>
  );
}

export default Container;
