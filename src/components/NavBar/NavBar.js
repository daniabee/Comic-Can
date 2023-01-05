import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/comicCollection"> My Collection </NavLink>
      <NavLink to="/addComic"> Add a Comic </NavLink>
    </div>
  );
};

export default NavBar;
