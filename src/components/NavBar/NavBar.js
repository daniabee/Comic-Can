import React from "react"
import "./NavBar.css"
import { NavLink } from "react-router-dom"
import './NavBar.css'
import comicBang from '../assets/comic_bang.png'

const NavBar = () => {
  return (
    <div className="navbar">
      <div className='my-collection-link'>
        <NavLink to="/comicCollection" >My Collection!</NavLink>
      </div>
      <div className='add-comic-link'>
        <NavLink to="/addComic">Add a Comic!</NavLink>
      </div>
    </div>
  )
}

export default NavBar
