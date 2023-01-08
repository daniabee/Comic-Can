import React from "react"
import "./NavBar.css"
import { NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar">
      <div className='my-collection'>
        <NavLink to="/comicCollection" className='my-collection-link'>My Collection!</NavLink>
      </div>
      <div className='add-comic'>
        <NavLink to="/addComic" className='add-comic-link'>Add a Comic!</NavLink>
      </div>
    </div>
  )
}

export default NavBar
