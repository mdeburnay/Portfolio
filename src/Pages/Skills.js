import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import javascriptIcon from "../Images/javascriptIcon.svg";
import html5Icon from "../Images/html5Icon.svg";
import css3Icon from "../Images/css3Icon.svg";
import reactIcon from "../Images/reactIcon.png";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="section-container">
      <h1 className="section-header" data-aos="fade-right">
        Skills<span className="fullstop">.</span>
      </h1>
      <div className="section-grid" data-aos="fade-in">
        <img src={javascriptIcon} className="icons" alt="JavaScript Icon" />
        <img src={html5Icon} className="icons" alt="HTML5 Icon" />
        <img src={css3Icon} className="icons" alt="CSS3 Icon" />
        <img src={reactIcon} className="icons react-icon" alt="React Icon" />
        <div className="icon-text" data-aos="fade-in" data-aos-delay="500">
          JavaScript
        </div>
        <div className="icon-text" data-aos="fade-in" data-aos-delay="500">
          HTML5
        </div>
        <div className="icon-text" data-aos="fade-in" data-aos-delay="500">
          CSS3
        </div>
        <div className="icon-text" data-aos="fade-in" data-aos-delay="500">
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
