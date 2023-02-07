import "./App.css";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import Form from "../Form/Form";
import ComicCollection from "../ComicCollection/ComicCollection";
import { Route, Routes } from "react-router";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getComicData } from "../../apiCalls";
import ComicDetail from "../ComicDetail/ComicDetail";

function App() {
  const [comicData, setComicData] = useState([]);
  //const [error, setError] = useState("");

  useEffect(() => {
    const getAllComicData = async () => {
      const data = await getComicData(
        "https://comic-can.herokuapp.com/api/v1/comicData"
      );
      setComicData(data);
    };
    getAllComicData();
  }, []);

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
        exact
        path="/:id"
        element={
          <ComicDetail setComicData={setComicData} comicData={comicData} />
        }
      />
    </Routes>
  );
}

export default App;
