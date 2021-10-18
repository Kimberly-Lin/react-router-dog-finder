import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
      <nav className="NavBar">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/dogs/:name">
          {name}
        </NavLink>
      </nav>
    );
  }
  
  export default NavBar;