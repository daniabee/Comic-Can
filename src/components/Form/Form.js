import React, { useState } from "react";
import "./Form.css";

const Form = ({ setComicData, comicData }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [issue, setIssue] = useState("");
  const [grade, setGrade] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [note, setNote] = useState("");

  const postComicData = async () => {
    const url = "https://comic-can.herokuapp.com/api/v1/comicData";
    const newComic = {
      id: comicData.length + 1,
      title: title,
      year: year,
      issue: issue,
      grade: grade,
      image_path: imageURL,
      verified: "false",
      note: note,
    };
    if (newComic.image_path) {
      newComic.verified = "true";
    } else {
      newComic.image_path =
        "https://www.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1732584341.jpg";
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComic),
    };
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      setComicData([...comicData, data]);
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  };

  const clearInputs = () => {
    setTitle("");
    setYear("");
    setIssue("");
    setGrade("");
    setImageURL("");
    setNote("");
  };

  return (
    <div className="background">
      <form className="form">
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
        <button
          onClick={(event) => {
            event.preventDefault();
            postComicData();
            clearInputs();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
