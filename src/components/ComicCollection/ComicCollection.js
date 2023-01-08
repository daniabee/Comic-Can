import React from "react";
import "./ComicCollection.css";
import ComicCard from "../ComicCard/ComicCard";
import PropTypes from "prop-types";
import { LeftArrow, RightArrow } from "./Arrows";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const ComicCollection = ({ comicData }) => {
  const comicCards = comicData.map((item) => {
    return <ComicCard key={item.id} card={item} />;
  });

  return (
    <div className="comicCollection">
      <ScrollMenu
        data={comicCards}
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        dragging={true}
        wheel={false}
        alignCenter={false}
        clickWhenDrag={false}
      >
        {comicCards}
      </ScrollMenu>
    </div>
  );

  // return <div className="comicCollection">{comicCards}</div>;
};

export default ComicCollection;

ComicCollection.prototype = {
  comicData: PropTypes.arrayOf(PropTypes.object).isRequired,
  setComicData: PropTypes.func.isRequired,
};
