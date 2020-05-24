import React, { Component } from "react";
import { Link } from "react-router-dom";

import githubIcon from "../Images/githubIcon.svg";
import linkedInIcon from "../Images/linkedInIcon.svg";
import emailIcon from "../Images/emailIcon.svg";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar" data-aos="fade-in">
        <Link className="navbar-links" to="/https://github.com/mdeburnay/">
          <img src={githubIcon} className="navbar-icons" />
        </Link>
        <Link className="navbar-links" to="/">
          <img src={linkedInIcon} className="navbar-icons" />
        </Link>
        <Link className="navbar-links" to="/">
          <img src={emailIcon} className="navbar-icons" />
        </Link>
      </div>
    );
  }
}
