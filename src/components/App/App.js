import "./App.css";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import Form from "../Form/Form";
import ComicCollection from "../ComicCollection/ComicCollection";
import EditForm from "../EditForm/EditForm";
import { Route, Routes } from "react-router";
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import ComicDetail from "../ComicDetail/ComicDetail";

function App() {
  const [comicData, setComicData] = useState([]);
  const [error, setError] = useState("");

  const getComicData = async () => {
    const url = "https://comic-can.herokuapp.com/api/v1/comicData";
    try {
      const response = await fetch(url);
      const comicBookData = await response.json();
      setComicData(comicBookData);
    } catch (error) {
      setError(`Error: ${error}`);
    }
  };

  useEffect(() => {
    getComicData();
  }, []);

  const findCards = (match) => {
    const card = comicData.filter((item) => {
      return Number(match) === Number(item.id)
    });
    return card;
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <Home />
            <NavBar />
          </>
        }
      />
      <Route
        exact
        path="/addComic"
        element={
          <>
            <Link className="homeButton" to="/">
              Home
            </Link>
            <Form setComicData={setComicData} comicData={comicData} />
            <NavBar />
          </>
        }
      />
      <Route
        exact
        path="/comicCollection"
        element={
          <>
            <Link className="homeButton" to="/">
              Home
            </Link>
            <ComicCollection
              comicData={comicData}
              setComicData={setComicData}
            />
            <NavBar />
          </>
        }
      />
      <Route
        exact path="/:id"
        element={
          <ComicDetail
            // findCards={findCards}
            setComicData={setComicData}
            // comicData={comicData}
          />
        }
      />
    </Routes>
  );
}

export default App;
