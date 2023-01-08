import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./EditForm.css";

const EditForm = ({ comicCard, setComicCard, show, setShowModal, comicData, setComicData }) => {
  const [title, setTitle] = useState(comicCard.title);
  const [year, setYear] = useState(comicCard.year);
  const [issue, setIssue] = useState(comicCard.issue);
  const [grade, setGrade] = useState(comicCard.grade);
  const [imageURL, setImageURL] = useState(comicCard.image_path);
  const [note, setNote] = useState(comicCard.note);

  useEffect(() => {
    setTitle(comicCard.title)
    setYear(comicCard.year)
    setIssue(comicCard.issue)
    setGrade(comicCard.grade)
    setImageURL(comicCard.image_path)
    setNote(comicCard.note)
  }, [comicCard.title, comicCard.year, comicCard.issue, comicCard.grade, comicCard.imageURL, comicCard.note, comicData]);

  // const editComicData = (newData) => {
  //  console.log("COMICDATA", comicData)
  //   const comics = comicData.filter((item) => item.id !== comicCard.id);
  //   comics.push(newData);
  //   return comics
  // };
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
  const putComicData = async () => {
    const url = `https://comic-can.herokuapp.com/api/v1/comicData/${comicCard.id}`;
    const newComic = {
      id: comicCard.id,
      title: title,
      year: year,
      issue: issue,
      grade: grade,
      image_path: imageURL,
      verified: comicCard.varified,
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
      getOneComicData(data.id)
      // setComicData(editComicData(data));
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  };

  const getComicData = async () => {
    const url = "https://comic-can.herokuapp.com/api/v1/comicData";
    try {
      const response = await fetch(url);
      const comicBookData = await response.json();
      setComicData(comicBookData);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  const deleteComic = async () => {
    const url = `https://comic-can.herokuapp.com/api/v1/comicData/${comicCard.id}`;
    const requestOptions = {
      method: "DELETE",
    };
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      getComicData();
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

export default EditForm;
