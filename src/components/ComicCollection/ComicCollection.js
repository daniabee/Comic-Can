import React from "react";
import "./ComicCollection.css";
import ComicCard from "../ComicCard/ComicCard";
import PropTypes from 'prop-types'

const ComicCollection = ({ comicData }) => {
  const comicCards = comicData.map((item) => {
    return <ComicCard key={item.id} card={item} />;
  });

  return <div className="comicCollection">{comicCards}</div>;
};

export default ComicCollection;

ComicCollection.prototype = {
  comicData:PropTypes.arrayOf(PropTypes.object).isRequired,
  setComicData: PropTypes.func.isRequired
}