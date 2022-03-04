import React from "react";
import { Link } from "react-router-dom";
import SubHeading from "../../../../UI Components/Typography/SubHeading";
import classes from "./Links_Styles/TextLink.module.scss";
function TextLink(props) {
  return (
    <Link
      className={classes.TextLink}
      to={{
        pathname: `/${props.rootRoute}${
          props.gender ? `/${props.gender}` : ""
        }`,
        search: `?category=${props.itemName.toLowerCase()}`,
      }}
    >
      <SubHeading text={props.itemName} fontWeight="bold" />
    </Link>
  );
}

export default TextLink;
