import React, { useState } from "react";
import PropTypes from 'prop-types'
import "./Form.css";
import { postComicData } from "../../apiCalls";

const Form = ({ setComicData, comicData }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [issue, setIssue] = useState("");
  const [grade, setGrade] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [note, setNote] = useState("");

  const postNewComic = async () => {
    const newComic = {
      title: title,
      year: year,
      issue: issue,
      grade: grade,
      image_path: imageURL,
      verified: "false",
      note: note,
    };
    const newData = await postComicData(newComic)
    setComicData([...comicData, newData])
  }
  
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
            postNewComic();
            clearInputs();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  comicData: PropTypes.arrayOf(PropTypes.object).isRequired,
  setComicData: PropTypes.func.isRequired
}

export default Form;
