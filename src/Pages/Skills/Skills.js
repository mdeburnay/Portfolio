import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";

import javascriptIcon from "../../Images/javascriptIcon.svg";
import html5Icon from "../../Images/html5Icon.svg";
import css3Icon from "../../Images/css3Icon.svg";
import reactIcon from "../../Images/reactIcon.png";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="section-container skills" id="skills">
      <h1 className="section-header" data-aos="fade-right">
        Skills<span className="fullstop">.</span>
      </h1>
      <div className="section-grid-skills" data-aos="fade-in">
        <img
          src={javascriptIcon}
          className="skills-icon"
          alt="JavaScript Icon"
        />
        <img src={html5Icon} className="skills-icon" alt="HTML5 Icon" />
        <img src={css3Icon} className="skills-icon" alt="CSS3 Icon" />
        <img
          src={reactIcon}
          className="skills-icon react-icon"
          alt="React Icon"
        />
        <div
          className="skills-icon-text"
          data-aos="fade-in"
          data-aos-delay="500"
        >
          JavaScript
        </div>
        <div
          className="skills-icon-text"
          data-aos="fade-in"
          data-aos-delay="500"
        >
          HTML5
        </div>
        <div
          className="skills-icon-text"
          data-aos="fade-in"
          data-aos-delay="500"
        >
          CSS3
        </div>
        <div
          className="skills-icon-text"
          data-aos="fade-in"
          data-aos-delay="500"
        >
          React.js
        </div>
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Righteous&family=Varela+Round&display=swap"
          rel="stylesheet"
        ></link>
      </div>
    </div>
  );
}
