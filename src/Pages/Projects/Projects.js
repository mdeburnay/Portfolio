import React from "react";
import "./Projects.css";

import kodflixLogo from "../../Images/kodflixLogo.png";
import javaScriptIcon from "../../Images/javascriptIcon.svg";
import reactIcon from "../../Images/reactIcon.png";
import nodejsIcon from "../../Images/nodejsIcon.png";
import herokuIcon from "../../Images/herokuIcon.svg";
import htmlIcon from "../../Images/html5Icon.svg";
import cssIcon from "../../Images/css3Icon.svg";
import carrateIcon from "../../Images/carrateLogo.jpg";
import pomodoroLogo from "../../Images/pomodoroTimerLogo.png";

export default function Projects() {
  return (
    <div className="section-container projects" id="projects">
      <h1 className="section-header" data-aos="fade-right">
        Projects<span className="fullstop">.</span>
      </h1>
      <div className="section-grid-projects" data-aos="fade-right">
        <a
          href="https://kodflix-project.herokuapp.com/"
          className="project-card-link"
          target="_blank"
        >
          <div className="project-card" data-aos="fade-right">
            <img
              className="project-card-img"
              src={kodflixLogo}
              alt="Kodflix Logo"
            />
            <div className="project-card-details">
              <h1 className="project-card-title">Kodflix</h1>
              <div className="project-card-summary">
                A Netflix-esque web application which displays a selection of
                movies. Users can click on each movie to find out more details.
              </div>
              <div className="project-card-technologies">
                <img
                  className="project-card-logo"
                  src={javaScriptIcon}
                  alt="JavaScript Icon"
                />
                <img
                  className="project-card-logo"
                  src={htmlIcon}
                  alt="HTML Icon"
                />
                <img
                  className="project-card-logo"
                  src={cssIcon}
                  alt="CSS Icon"
                />
                <img
                  className="project-card-logo"
                  src={reactIcon}
                  alt="React Icon"
                />
                <img
                  className="project-card-logo"
                  src={nodejsIcon}
                  alt="Node Icon"
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
                based on the ingredients which the user inputs into the search
                bar.
              </div>
              <div className="project-card-technologies">
                <img
                  className="project-card-logo"
                  src={javaScriptIcon}
                  alt="JavaScript Icon"
                />
                <img
                  className="project-card-logo"
                  src={htmlIcon}
                  alt="HTML Icon"
                />
                <img
                  className="project-card-logo"
                  src={cssIcon}
                  alt="CSS Icon"
                />
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
                A Pomodoro timer built for myself to help with my own
                productivity and time management.
              </div>
              <div className="project-card-technologies">
                <img
                  className="project-card-logo"
                  src={javaScriptIcon}
                  alt="JavaScript Icon"
                />
                <img
                  className="project-card-logo"
                  src={htmlIcon}
                  alt="HTML Icon"
                />
                <img
                  className="project-card-logo"
                  src={cssIcon}
                  alt="CSS Icon"
                />
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
      </div>
    </div>
  );
}
