import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav-header">
          <Link className="navbar-links" to="/">
            HOME
          </Link>
          <Link className="navbar-links" to="/Projects">
            PROJECTS
          </Link>
          <Link className="navbar-links" to="/About">
            ABOUT
          </Link>
          <Link className="navbar-links" to="/Contact">
            CONTACT
          </Link>
        </div>
      </div>
    );
  }
}
