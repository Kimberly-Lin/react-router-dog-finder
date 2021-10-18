import React from "react";
import { NavLink } from "react-router-dom";


function Nav(dogs) {
  return (
    <nav className="NavBar">
      <NavLink exact to="/dogs">
        Home
      </NavLink>
      {dogs.map(dog =>
        <NavLink exact to={`/dogs/${dog.name}`}>
          {dog.name}
        </NavLink>
      )};
    </nav>
  );
}

export default Nav;