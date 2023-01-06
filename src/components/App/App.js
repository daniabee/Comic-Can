import "./App.css";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import Form from "../Form/Form";
import ComicCollection from "../ComicCollection/ComicCollection";
import { Route, Routes } from "react-router";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//sample data in use
import sampleData from "../../sampleData.js/sampleData";
import ComicDetail from "../ComicDetail/ComicDetail";

function App() {
  const [comicData, setComicData] = useState(sampleData);

  const findCards = (match) => {
    const card = comicData.find((item) => match === `${item.id}`);
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
            <NavLink to="/"> Home </NavLink>
            <Form />
            <NavBar />
          </>
        }
      />
      <Route
        exact
        path="/comicCollection"
        element={
          <>
            <NavLink to="/"> Home </NavLink>
            <ComicCollection comicData={comicData} />
            <NavBar />
          </>
        }
      />
      <Route
        path="/comicCollection/:id"
        element={<ComicDetail findCards={findCards} />}
      />
    </Routes>
  );
}

export default App;
