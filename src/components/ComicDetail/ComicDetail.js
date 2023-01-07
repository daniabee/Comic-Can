import React, { useState } from "react";
import { useParams } from "react-router";
import "./ComicDetail.css";
import EditForm from "../EditForm/EditForm";

const ComicDetail = ({ findCards }) => {
  const { id } = useParams();
  const card = findCards(id);

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        className="edit"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Edit Comic
      </button>
      <div className="cardDetails">
        <img src={card.image_path} alt={`Cover of ${card.title}`} />
        <div className="cardInfo">
          <div>
            <h2>{card.title} </h2>
          </div>
          <p>Year: {card.year}</p>
          <p>Issue: {card.issue}</p>
          <p>Grade: {card.grade}</p>
          <p>Notes: {card.note}</p>
        </div>
        <EditForm show={showModal} card={card} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default ComicDetail;
