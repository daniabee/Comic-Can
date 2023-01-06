import React from "react";

const ComicDetail = ({ card }) => {
  return (
    <div className="cardDetails">
      <p>Title: {card.title}</p>
      <p>Year: {card.year}</p>
      <p>Issue: {card.issue}</p>
      <p>Grade: {card.grade}</p>
      <img src={card.image_path} alt={`Cover of ${card.title}`} />
      <p>Verified: {card.verified}</p>
      <p>Notes: {card.notes}</p>
    </div>
  );
};

export default ComicDetail;
