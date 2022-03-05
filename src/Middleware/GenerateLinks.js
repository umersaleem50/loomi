import FullWidthLink from "../Components/Smart/Navigation/NavContainers/Links/FullWidthLink";
import StrokeLink from "../Components/Smart/Navigation/NavContainers/Links/StrokeLink";
import TextLink from "../Components/Smart/Navigation/NavContainers/Links/TextLink";
import FullHeightPhotoLink from "../Components/Smart/Navigation/NavContainers/Links/PhotoLinks/FullHeightPhotoLink";

const generateLinks = (linkType, data) => {
  let LinkType = null;
  switch (linkType) {
    case "full":
      LinkType = FullWidthLink;
      break;
    case "stroke":
      LinkType = StrokeLink;
      break;
    case "text":
      LinkType = TextLink;
      break;
    case "fullphoto":
      LinkType = FullHeightPhotoLink;
      break;
    default:
      LinkType = TextLink;
      break;
  }
  const links = data.map((link, i) => {
    return <LinkType key={i} {...link} />;
  });

  return links;
};

export default generateLinks;
