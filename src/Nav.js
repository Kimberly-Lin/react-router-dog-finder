import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

/** Renders navbar for navigating
 * 
 * props: dogs
 * state: N/A
 * 
 * App-> Nav
 */
function Nav({ dogs }) {
  return (
    <nav className="Nav">
      <NavLink exact to="/dogs" className="Home">
        Home
      </NavLink>
      {dogs.map(dog =>
        <NavLink exact to={`/dogs/${dog.name}`} key={dog.name}>
          {dog.name}
        </NavLink>
      )}
    </nav>
  );
}

export default Nav;