import '../Components.css';
import React from "react"
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <div>
      <NavLink
        className="App-link"
        exact to="/" 
      >
        Home
      </NavLink>
      <NavLink
        className="App-link"
        exact to="/books" 
      >
        Books
      </NavLink>
      <NavLink
        className="App-link"
        exact to="/reviews" 
      >
        Reviews
      </NavLink>
    </div>
  );
}

export default NavBar;