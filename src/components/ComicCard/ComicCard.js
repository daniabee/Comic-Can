import React from "react";
import "./ComicCard.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ComicCard = ({ card }) => {
  return (
    <Link to={`/${card.id}`}>
      <img
        className="comicCard"
        src={card.image_path}
        alt={`cover of ${card.title} ${card.year} ${card.issue}`}
      />
    </Link>
  );
};

ComicCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    image_path: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    issue: PropTypes.string,
  }).isRequired,
};

export default ComicCard;
