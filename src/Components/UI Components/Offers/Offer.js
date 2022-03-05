import React from "react";
import classes from "./Offer.module.scss";
const Offer = (props) => {
  return (
    <div
      className={classes.Offer}
      style={{ padding: props.withPadding && "1rem 1rem 0 1rem" }}
    >
      <img src={props.imgSrc} alt="Offer" />
    </div>
  );
};

export default Offer;
