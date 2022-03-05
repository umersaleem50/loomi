import React from "react";
import generateLinks from "../../../../../Middleware/GenerateLinks";
import Offer from "../../../../UI Components/Offers/Offer";
import Category from "../Category/Category";
import offerImgDummy from "../../../../../Assets/offer2.png";
import classes from "./Container_Styles/Sale_Container.module.scss";
function Sale_Container() {
  const dummyData = [
    {
      itemName: "Shoes",
      rootRoute: "sale",
      gender: "men",
      imgSrc:
        "https://images.pexels.com/photos/9604300/pexels-photo-9604300.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      itemName: "Top wears",
      rootRoute: "sale",
      gender: "women",
      imgSrc:
        "https://images.pexels.com/photos/7945542/pexels-photo-7945542.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];
  const shopBySexLinks = generateLinks("fullphoto", dummyData);
  const categoryLinks = generateLinks(
    "stroke",
    dummyData.concat(dummyData).concat(dummyData.concat(dummyData))
  );
  return (
    <React.Fragment>
      <Offer imgSrc={offerImgDummy} />
      <div className={classes.Sale_Container}>
        <Category linkType="fullphoto" title="Shop by sex">
          {shopBySexLinks}
        </Category>
        <Category linkType="StrokeLink" title="Categories">
          {categoryLinks}
        </Category>
      </div>
    </React.Fragment>
  );
}

export default Sale_Container;
