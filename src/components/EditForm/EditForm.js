import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EditForm.css";

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
      <div className="modal">
        <div className="modalContent">
        <button
          className="close"
          onClick={() => {
            setShowModal(false);
          }}
        >
          X
        </button>
        <form className="editLabels">
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
          <label>
            Image URL:
            <input
              type="text"
              name="image"
              value={imageURL}
              onChange={(event) => {
                setImageURL(event.target.value);
              }}
            />
          </label>
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
          </form>
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
          <Link
            className="delete"
            to="/comicCollection"
            onClick={() => {
              console.log("hello");
              deleteComic();
            }}
          >
            Delete
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default EditForm;
