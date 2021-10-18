import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import UserContext from "../auth/UserContext";

function Homepage() {
  const { currentUser } = useContext(UserContext);
  console.debug("Homepage", "currentUser=", currentUser);

  return (
      <div className="Homepage">
        <div className="container text-center">
          <h2>Welcome to</h2>
          <h1 className="homeTitle">Menu Builder</h1>
          {currentUser
              ? 
              <>
              <h1 className='nameTitle'>
                {currentUser.firstName || currentUser.username}!
              </h1>
              <Link to={`/menus/${currentUser.username}`}>
                <button className='homeBtn'>Let's get to it</button>
              </Link>
              </>
              : (
                <Link to='/login'>
                <button className='homeBtn'>Let's get to it!</button>
                </Link>
              )}
        </div>
      </div>
  );
}

export default Homepage;
