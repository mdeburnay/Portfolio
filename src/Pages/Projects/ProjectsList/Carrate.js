import React from "react";

import javaScriptIcon from "../../../Images/javascriptIcon.svg";
import reactIcon from "../../../Images/reactIcon.png";
import herokuIcon from "../../../Images/herokuIcon.svg";
import htmlIcon from "../../../Images/html5Icon.svg";
import cssIcon from "../../../Images/css3Icon.svg";
import carrateIcon from "../../../Images/carrateLogo.jpg";

export default function Carrate() {
  return (
    <a
      href="https://carrate.herokuapp.com/"
      className="project-card-link"
      target="_blank"
    >
      <div className="project-card" data-aos="fade-right">
        <img
          className="project-card-img"
          src={carrateIcon}
          alt="Carrate Logo"
        />
        <div className="project-card-text">
          <h1 className="project-card-title">Carrate</h1>
          <div className="project-card-summary">
            A mobile-first application which fetches recipe recommendations
            based on the ingredients which the user inputs into the search bar.
          </div>
          <div className="project-card-technologies">
            <img
              className="project-card-logo"
              src={javaScriptIcon}
              alt="JavaScript Icon"
            />
            <img className="project-card-logo" src={htmlIcon} alt="HTML Icon" />
            <img className="project-card-logo" src={cssIcon} alt="CSS Icon" />
            <img
              className="project-card-logo"
              src={reactIcon}
              alt="React Icon"
            />
            <img
              className="project-card-logo"
              src={herokuIcon}
              alt="Heroku Icon"
            />
          </div>
        </div>
      </div>
    </a>
  );
}
