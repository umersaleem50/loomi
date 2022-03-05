import React from "react";
import { Link } from "react-router-dom";
import SubHeading from "../../../../../UI Components/Typography/SubHeading";
import classes from "./FullHeightPhotoLink.module.scss";
function FullHeightPhotoLink(props) {
  let title;

  switch (props.gender) {
    case "men":
      title = "For Him";
      break;
    case "women":
      title = "For Her";
      break;
    default:
      title = "For Him";
      break;
  }
  return (
    <div className={classes.FullHeightPhotoLink}>
      <Link to={{ pathname: `/${props.rootRoute}/${props.gender}` }}>
        <img
          src={
            props.imgSrc ||
            "https://images.pexels.com/photos/2608344/pexels-photo-2608344.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
          alt={props.gender}
        />
        <div className={classes.GenderTitle}>
          <SubHeading text={title} fontWeight="bold" />
        </div>
      </Link>
    </div>
  );
}

export default FullHeightPhotoLink;
