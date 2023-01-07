import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./ComicDetail.css";
import EditForm from "../EditForm/EditForm";
import verifiedImage from "../assets/verified.png";

const ComicDetail = ({ findCards, setComicData, comicData }) => {
  const { id } = useParams();
  const card = findCards(id);

  const [showModal, setShowModal] = useState(false);

  const checkVerification = () => {
    if (card.verified.toLowerCase() === "true") {
      return (
        <img
          src={verifiedImage}
          alt={"verified icon"}
          className="verifiedImage"
        />
      );
    }
  };
  return (
    <div className="comicDetails">
      <Link to="/comicCollection">Back</Link>
      <button
        className="edit"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Edit
      </button>
      <div className="cardDetails">
        <img
          src={card.image_path}
          alt={`Cover of ${card.title}`}
          className="comicImage"
        />
        <div className="cardInfo">
          <div className="cardTitle">
            {checkVerification()}
            <h2>{card.title} </h2>
          </div>
          <p>Year: {card.year}</p>
          <p>Issue: {card.issue}</p>
          <p>Grade: {card.grade}</p>
          <p>Notes: {card.note}</p>
        </div>
        <EditForm
          show={showModal}
          card={card}
          setShowModal={setShowModal}
          setComicData={setComicData}
          comicData={comicData}
        />
      </div>
    </div>
  );
};

export default ComicDetail;
