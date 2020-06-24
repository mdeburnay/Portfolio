import React from "react";

import javaScriptIcon from "../../../Images/javascriptIcon.svg";
import reactIcon from "../../../Images/reactIcon.png";
import herokuIcon from "../../../Images/herokuIcon.svg";
import htmlIcon from "../../../Images/html5Icon.svg";
import cssIcon from "../../../Images/css3Icon.svg";
import pomodoroLogo from "../../../Images/pomodoroTimerLogo.png";

export default function PomodoroTimer() {
  return (
    <a href="" className="project-card-link" target="_blank">
      <div className="project-card" data-aos="fade-right">
        <img
          className="project-card-img"
          src={pomodoroLogo}
          alt="Pomodoro Logo"
        />
        <div className="project-card-text">
          <h1 className="project-card-title">Pomodoro Timer</h1>
          <div className="project-card-summary">
            A Pomodoro timer built for myself to help with my own productivity
            and time management.
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
