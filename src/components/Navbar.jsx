import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        Navbar
        <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'activeLink' : '')}
        >
            Home
        </NavLink>
        <NavLink
            to="/tortas"
            className={({ isActive }) => (isActive ? 'activeLink' : '')}
        >
            Tortas
        </NavLink>
        <NavLink
            to="/guisos"
            className={({ isActive }) => (isActive ? 'activeLink' : '')}
        >
            Guisos
        </NavLink>
        <NavLink
            to="/empanadas"
            className={({ isActive }) => (isActive ? 'activeLink' : '')}
        >
            Empanadas
        </NavLink>
        <NavLink
            to="/ravioles"
            className={({ isActive }) => (isActive ? 'hiddenRavioli' : '')}
        > 
        Ravioles Ocultos       
        </NavLink>  
    </div>
  )
}

export default Navbar