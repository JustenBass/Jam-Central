import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <NavLink to='/'>
            <h4> Home </h4>
        </NavLink>

        <NavLink to='/artists'>
            <h4> Artists </h4>
        </NavLink>
    </div>
  )
}
