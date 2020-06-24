import React from "react";
import "./Skills.css";

import javascriptIcon from "../../Images/javascriptIcon.svg";
import html5Icon from "../../Images/html5Icon.svg";
import css3Icon from "../../Images/css3Icon.svg";
import reactIcon from "../../Images/reactIcon.png";
import nodeIcon from "../../Images/nodejsIcon.png";
import herokuIcon from "../../Images/herokuIcon.svg";

export default function Skills() {
  return (
    <div className="section-container skills" id="skills">
      <h1 className="section-header" data-aos="fade-right">
        Skills<span className="fullstop">.</span>
      </h1>
      <div className="section-grid-skills" data-aos="fade-in">
        <div className="skills-grid-section">
          <img
            src={javascriptIcon}
            className="skills-icon"
            alt="JavaScript Icon"
          />
          <div
            className="skills-icon-text"
            data-aos="fade-in"
            data-aos-delay="500"
          >
            JavaScript
          </div>
        </div>
        <div className="skills-grid-section">
          <img src={html5Icon} className="skills-icon" alt="HTML5 Icon" />{" "}
          <div
            className="skills-icon-text"
            data-aos="fade-in"
            data-aos-delay="500"
          >
            HTML5
          </div>
        </div>
        <div className="skills-grid-section">
          <img src={css3Icon} className="skills-icon" alt="CSS3 Icon" />{" "}
          <div
            className="skills-icon-text"
            data-aos="fade-in"
            data-aos-delay="500"
          >
            CSS3
          </div>
        </div>
        <div className="skills-grid-section">
          <img src={nodeIcon} className="skills-icon node.js" alt="Node Icon" />{" "}
          <div
            className="skills-icon-text"
            data-aos="fade-in"
            data-aos-delay="500"
          >
            Node.js
          </div>
        </div>
        <div className="skills-grid-section">
          <img src={herokuIcon} className="skills-icon " alt="Heroku  Icon" />
          <div
            className="skills-icon-text"
            data-aos="fade-in"
            data-aos-delay="500"
          >
            Heroku
          </div>
        </div>
        <div className="skills-grid-section">
          <img src={reactIcon} className="skills-icon " alt="React Icon" />{" "}
          <div
            className="skills-icon-text"
            data-aos="fade-in"
            data-aos-delay="500"
          >
            React.js
          </div>
        </div>
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Righteous&family=Varela+Round&display=swap"
          rel="stylesheet"
        ></link>
      </div>
    </div>
  );
}
