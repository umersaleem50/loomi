import React from "react";
import Category from "./Category/Category";
import FullWidthLink from "./Links/FullWidthLink";
import StrokeLink from "./Links/StrokeLink";
import TextLink from "./Links/TextLink";
import classes from "./NavContainer.module.scss";

const NavContainer = (props) => {
  const dummyData = [
    {
      itemName: "Shoes",
      rootRoute: "sale",
      gender: "men",
      imgSrc:
        "https://images.pexels.com/photos/8415157/pexels-photo-8415157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      itemName: "Top wears",
      rootRoute: "sale",
      gender: "women",
      imgSrc:
        "https://images.pexels.com/photos/8415157/pexels-photo-8415157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      itemName: "Slit Dress",
      rootRoute: "sale",
      gender: "women",
      imgSrc:
        "https://images.pexels.com/photos/8415157/pexels-photo-8415157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      itemName: "Hats",
      rootRoute: "sale",
      gender: "men",
      imgSrc:
        "https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];

  const WrapperElement = props.element;
  const container = props.toggle ? (
    <div className={classes.NavContainer}>
      {/* <WrapperElement /> */}
      {/* <FullWidthLink itemName="Shoes" rootRoute="sale" gender="men" />
      <StrokeLink itemName="Clothes" rootRoute="sale" gender="women" />
      <TextLink itemName="Clothes" rootRoute="sale" /> */}
      <Category linkType="stroke" links={dummyData} title="Category" />
    </div>
  ) : null;
  return container;
};

export default NavContainer;
