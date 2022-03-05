import React from "react";
// import { Link } from "react-router-dom";
import classes from "./Category.module.scss";
// import FullWidthLink from "../Links/FullWidthLink";
// import StrokeLink from "../Links/StrokeLink";
// import TextLink from "../Links/TextLink";
import SubHeading from "../../../../UI Components/Typography/SubHeading";
// import generateLinks from "../../../../../Middleware/GenerateLinks";

function Category(props) {
  return (
    <div className={classes.CategoryContainer}>
      <SubHeading
        text={props.title}
        fontWeight="bold"
        textTransform="uppercase"
      />
      <ul className={classes.Category}>{props.children}</ul>
    </div>
  );
}

export default Category;
