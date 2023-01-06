import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/comicCollection">My Collection </NavLink>
      <NavLink to="/addComic">Add a Comic </NavLink>
    </div>
  );
};

export default NavBar;
