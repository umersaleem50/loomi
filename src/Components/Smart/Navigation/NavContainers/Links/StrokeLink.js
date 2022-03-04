import React from "react";
import { Link } from "react-router-dom";
import SubHeading from "../../../../UI Components/Typography/SubHeading";
import classes from "./Links_Styles/StrokeLink.module.scss";
function StrokeLink(props) {
  return (
    <Link
      className={classes.StrokeLink}
      to={{
        pathname: `/${props.rootRoute}${props.gender && "/" + props.gender}`,
        search: `?category=${props.itemName.toLowerCase()}`,
      }}
    >
      <img
        src={
          props.imgSrc ||
          `https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
        }
      />
      <SubHeading text={props.itemName} />
    </Link>
  );
}

export default StrokeLink;
