import "./App.css";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import Form from "../Form/Form";
import ComicCollection from "../ComicCollection/ComicCollection";
import { Route, Routes } from "react-router";
import React from "react";
import { NavLink } from "react-router-dom";

function App() {
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
            <ComicCollection />
            <NavBar />
          </>
        }
      />
    </Routes>
  );
}

export default App;
