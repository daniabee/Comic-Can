import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EditForm.css";
import PropTypes from "prop-types";

const EditForm = ({ card, show, setShowModal, comicData, setComicData }) => {
  const [title, setTitle] = useState(card.title);
  const [year, setYear] = useState(card.year);
  const [issue, setIssue] = useState(card.issue);
  const [grade, setGrade] = useState(card.grade);
  const [imageURL, setImageURL] = useState(card.image_path);
  const [note, setNote] = useState(card.note);

  const editComicData = (newData) => {
    const found = comicData.filter((item) => item.id != card.id);
    found.push(newData);
    setComicData(found);
  };

  const putComicData = async () => {
    const url = `https://comic-can.herokuapp.com/api/v1/comicData/${card.id}`;
    const newComic = {
      id: card.id,
      title: title,
      year: year,
      issue: issue,
      grade: grade,
      image_path: imageURL,
      verified: card.varified,
      note: note,
    };

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComic),
    };
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      editComicData(data);
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  };

  const deleteComic = async () => {
    const url = `https://comic-can.herokuapp.com/api/v1/comicData/${card.id}`;
    const requestOptions = {
      method: "DELETE",
    };
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      setComicData([]);
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  };

  if (show) {
    return (
      <div className="background modal">
        <form className="form modalContent">
          <button
            className="close"
            onClick={() => {
              setShowModal(false);
            }}
          >
            X
          </button>
          <div className="option">
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="option">
            <label>
              Year:
              <input
                type="text"
                name="year"
                value={year}
                onChange={(event) => {
                  setYear(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="option">
            <label>
              Issue:
              <input
                type="text"
                name="issue"
                value={issue}
                onChange={(event) => {
                  setIssue(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="option">
            <label>
              Grade:
              <input
                type="text"
                name="grade"
                value={grade}
                onChange={(event) => {
                  setGrade(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="option">
            <label>
              Image URL:
              <input
                type="text"
                name="image"
                maxLength="250"
                value={imageURL}
                onChange={(event) => {
                  setImageURL(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="option">
            <label>
              Notes:
              <input
                type="text"
                name="notes"
                value={note}
                onChange={(event) => {
                  setNote(event.target.value);
                }}
              />
            </label>
          </div>
          <Link
            className="delete"
            to="/comicCollection"
            onClick={() => {
              console.log("hello");
              deleteComic();
            }}
          >
            🗑️
          </Link>
          <button
            className="updateButton"
            onClick={(event) => {
              event.preventDefault();
              putComicData();
              setShowModal(false);
            }}
          >
            Update
          </button>
        </form>
      </div>
    );
  } else {
    return null;
  }
};

EditForm.propTypes = {
  findCards: PropTypes.func,
  setComicData: PropTypes.func,
  comicData: PropTypes.arrayOf(PropTypes.object),
  card: PropTypes.shape({
    id: PropTypes.number,
    image_path: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    issue: PropTypes.string,
  }),
  show: PropTypes.bool,
  setShowModal: PropTypes.func,
};

export default EditForm;
