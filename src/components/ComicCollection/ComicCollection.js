import React from "react";
import ComicCard from "../ComicCard/ComicCard";

const ComicCollection = ({ comicData }) => {
  const comicCards = comicData.map((item) => {
    return <ComicCard key={item.id} card={item} />;
  });

  return comicCards;
};

export default ComicCollection;
