import React from "react";
// import { Link } from "react-router-dom";

function Nav() {
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
  
  