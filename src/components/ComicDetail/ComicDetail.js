import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./ComicDetail.css";
import EditForm from "../EditForm/EditForm";
import verifiedImage from "../assets/verified.png";
import PropTypes from 'prop-types'

const ComicDetail = ({comicData, setComicData}) => {
  const [comicCard, setComicCard] = useState([])
  const { id } = useParams();
  const getOneComicData = async (id) => {
    console.log(id)
    const url = `https://comic-can.herokuapp.com/api/v1/comicData/${id}`;
    try {
      const response = await fetch(url);
      const comicBook = await response.json();
      await setComicCard(comicBook[0]);
      await console.log("COMICCARD", comicCard)
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  //const card = findCards(id);
  console.log("ID", id)
  useEffect(() => {
    getOneComicData(id)
  }, [])
  const [showModal, setShowModal] = useState(false);

  // const checkVerification = () => {
  //   console.log("comicCard.verified", comicCard.verified)
  //   console.log("DATA TYPE", typeof verified)
  //   const ver = comicCard.verified.toLowerCase()
  //   if (ver === "true") {
  //     return (
  //       <img
  //         src={verifiedImage}
  //         alt={"verified icon"}
  //         className="verifiedImage"
  //       />
  //     );
  //   }
  // };
  return (

    <div className="comicDetails">
      <Link to="/comicCollection" className="back">
        <button>
          Back
        </button>
      </Link>
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
          src={comicCard.image_path}
          alt={`Cover of ${comicCard.title}`}
          className="comicImage"
        />
        <div className="cardInfo">
          <div className="cardTitle">
            {/* {checkVerification()} */}
            <h2>{comicCard.title} </h2>
          </div>
          <p>Year: {comicCard.year}</p>
          <p>Issue: {comicCard.issue}</p>
          <p>Grade: {comicCard.grade}</p>
          <p>Notes: {comicCard.note}</p>
        </div>
        <EditForm
          setComicCard={setComicCard}
          show={showModal}
          comicCard={comicCard}
          setShowModal={setShowModal}
          setComicData={setComicData}
          comicData={comicData}
        />
      </div>
    </div>
  );
};

export default ComicDetail;


ComicDetail.prototype = {
  comicData: PropTypes.arrayOf(PropTypes.object).isRequired,
  setComicData: PropTypes.func.isRequired
  //findCards
}