import React from "react";
import { Link } from "react-router-dom";

function Nav() {
<<<<<<< HEAD
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Tune Chainz
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
=======
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          <a href="../SongFeed">Song Feed</a>
          <a href="../AudioEditor">Editor</a>
          <a href="../Dashboard">Dashboard</a>
          <a href="../Profile">Profile</a>
        </a>
      </nav>
    );
};
export default Nav;
  
>>>>>>> e0a82b686ea158e9116d5950af558cd3ae73ce5b
  