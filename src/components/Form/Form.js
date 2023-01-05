import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <form className="form">
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <label>
        Issue:
        <input type="text" name="issue" />
      </label>
      <label>
        Grade:
        <input type="text" name="grade" />
      </label>
      <label>
        Image URL:
        <input type="text" name="image" />
      </label>
      <label>
        Notes:
        <input type="text" name="notes" />
      </label>
    </form>
  );
};

export default Form;
