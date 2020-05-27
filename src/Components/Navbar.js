import React, { Component } from "react";
import ScrollTopButton from "../Components/ScrollTopButton";

import githubIcon from "../Images/githubIcon.svg";
import linkedInIcon from "../Images/linkedInIcon.svg";
import emailIcon from "../Images/emailIcon.svg";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar" data-aos="fade-in">
        <ScrollTopButton scrollStepInPx="50" delayInMs="5" />
        <div></div>
        <a href="https://github.com/mdeburnay/" className="navbar-links">
          <img src={githubIcon} className="navbar-icons" alt="GitHub Account" />
        </a>
        <a
          href="https://www.linkedin.com/in/max-de-burnay-bastos-009b65197/"
          className="navbar-links"
        >
          <img
            src={linkedInIcon}
            className="navbar-icons"
            alt="LinkedIn Account"
          />
        </a>
        <a href className="navbar-links" to="/">
          <img src={emailIcon} className="navbar-icons" alt="Email Account" />
        </a>
      </div>
    );
  }
}
