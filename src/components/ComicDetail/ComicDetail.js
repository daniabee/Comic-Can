import React from "react";

const ComicDetail = ({ card }) => {
  return (
    <div>
      <p>Title: {card.title}</p>
      <p>Year</p>
      <p>Issue</p>
      <p>Grade</p>
      <p>Image</p>
      <p>Verified</p>
      <p>Notes</p>
    </div>
  );
};

export default ComicDetail;
