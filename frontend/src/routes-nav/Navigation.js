import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Navigation.css";

// NavBar

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currentUser);

  function loggedInNav() {
    return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-4">
            <button className="navBtn">
              <NavLink className="nav-link" to={`/menus/${currentUser.username}`}>
                Menus
              </NavLink>
            </button>
          </li>
          <li className="nav-item mr-4">
            <button className="navBtn">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </button>
          </li>
          <li className="nav-item">
            <button className="navBtn">
              <Link className="nav-link" to="/" onClick={logout}>
                Log out
              </Link>
            </button>
          </li>
        </ul>
    );
  }

  function loggedOutNav() {
    return (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <button className="navBtn">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </button>
          </li>
          <li className="nav-item">
            <button className="navBtn">
              <NavLink className="nav-link" to="/signup">
                Sign Up
              </NavLink>
            </button>
          </li>
        </ul>
    );
  }

  return (
      <nav className="Navigation navbar navbar-expand-md">
        <div className="container-fluid"> 
          <Link className="navbar-brand" id='navTitle' to="/">
            <img src="https://image.freepik.com/free-vector/cute-panda-chef-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-1297.jpg" alt="menu" width="50" height="45" className="pandaNav"/>
              Menu Builder
          </Link>
          {currentUser ? loggedInNav() : loggedOutNav()}
        </div>
      </nav>
  );
}

export default Navigation;
