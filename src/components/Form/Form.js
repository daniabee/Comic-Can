import React, { useState } from "react";
import "./Form.css";

const Form = ({ setComicData, comicData }) => {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [issue, setIssue] = useState('')
  const [grade, setGrade] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [notes, setNotes] = useState('')

  const postComicData = () => {
    const newComic = { id: Date.now(), title: title, year: year, issue: issue, grade: grade, image_path: imageURL, verified: "false", note: notes }
    console.log("NEWCOMIC", newComic)
    return fetch("https://comic-can.herokuapp.com/api/v1/comicData", {
        method: "POST",
        body: JSON.stringify(newComic),
        headers: {
          'Content-Type': 'application/JSON',
          'Accept': 'application/json'
        },
      }).then(response => {
        // if (response.status !== 201) {
        //   throw Error(response)
        // } else {
        //console.log("RESPONSE.JSON", response.json())
        console.log("RES", response)
          return response.json()
        //}
      }).then(data => {
        //setComicData([...comicData, data])
        console.log("DATA", data)
        console.log("COMICDATA", comicData)
      })
      .catch(error => console.log(error))
  }
  //const postComicData = async () => {
  //   const newComic = {id: Date.now(), title: title, year: year, issue: issue, grade: grade, image_path: imageURL, verified: "false", note: notes}
  // if(newComic.image_path) {
  //   newComic.verified = "true"
  // } else {
  //   newComic.image_path = "https://www.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1732584341.jpg"
  // }
  // console.log("NEWCOMIC", newComic)
  // const url = "https://comic-can.herokuapp.com/api/v1/comicData"
  // const requestOptions = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(newComic)
  // }
  // try {
  //   const response = await fetch(url, requestOptions)
  //   const data = await response.json()
  //   setComicData([...comicData, data])
  // } catch (error) {
  //   console.log(`Something went wrong: ${error}`)
  // }
  //}

  const clearInputs = () => {
    setTitle("")
    setYear("")
    setIssue("")
    setGrade("")
    setImageURL("")
    setNotes("")
  }

  return (
    <form className="form">
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={title}
          onChange={(event) => { setTitle(event.target.value) }}
        />
      </label>
      <label>
        Year:
        <input
          type="text"
          name="year"
          value={year}
          onChange={(event) => { setYear(event.target.value) }}
        />
      </label>
      <label>
        Issue:
        <input
          type="text"
          name="issue"
          value={issue}
          onChange={(event) => { setIssue(event.target.value) }}
        />
      </label>
      <label>
        Grade:
        <input
          type="text"
          name="grade"
          value={grade}
          onChange={(event) => { setGrade(event.target.value) }}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={imageURL}
          onChange={(event) => { setImageURL(event.target.value) }}
        />
      </label>
      <label>
        Notes:
        <input
          type="text"
          name="notes"
          value={notes}
          onChange={(event) => { setNotes(event.target.value) }}
        />
      </label>
      <button
        onClick={(event) => {
          event.preventDefault()
          postComicData()
          // clearInputs()
        }}
      >Submit</button>
    </form>
  );
};

export default Form;
