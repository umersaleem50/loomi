import React from "react";
import { Link } from "react-router-dom";
import classes from "./Category.module.scss";
import FullWidthLink from "../Links/FullWidthLink";
import StrokeLink from "../Links/StrokeLink";
import TextLink from "../Links/TextLink";
import SubHeading from "../../../../UI Components/Typography/SubHeading";

function Category(props) {
  let LinkType = null;
  switch (props.linkType) {
    case "full":
      LinkType = FullWidthLink;
      break;
    case "stroke":
      LinkType = StrokeLink;
      break;
    case "text":
      LinkType = TextLink;
      break;
    default:
      LinkType = TextLink;
      break;
  }
  const links = props.links.map((link, i) => {
    return <LinkType key={i} {...link} />;
  });
  return (
    <React.Fragment>
      <SubHeading text={props.title} />
      <ul className={classes.Category}>{links}</ul>
    </React.Fragment>
  );
}

export default Category;
