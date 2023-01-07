import React, { useState } from "react";
import "./EditForm.css";

const EditForm = ({ card, show, setShowModal }) => {
  const [title, setTitle] = useState(card.title);
  const [year, setYear] = useState(card.year);
  const [issue, setIssue] = useState(card.issue);
  const [grade, setGrade] = useState(card.grade);
  const [imageURL, setImageURL] = useState(card.image_path);
  const [notes, setNotes] = useState(card.notes);

  if (show) {
    return (
      <div className="modal-content">
        <button
          className="close"
          onClick={() => {
            setShowModal(false);
          }}
        >
          Close
        </button>
        <form className="form modal-body">
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
              value={notes}
              onChange={(event) => {
                setNotes(event.target.value);
              }}
            />
          </label>
          <button
            onClick={(event) => {
              //putFunction
              console.log("changed");
            }}
          >
            Submit Changes
          </button>
        </form>
      </div>
    );
  } else {
    return null;
  }
};

export default EditForm;
