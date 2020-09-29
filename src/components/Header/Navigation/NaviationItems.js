import React from 'react'
import { NavLink } from 'react-router-dom'

const navigationItems = () => (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/artists">Artists</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/albums">Albums</NavLink>
      </li>
    </ul>
)

export default navigationItems