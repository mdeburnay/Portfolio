import React from "react";

export default function testProject(props) {
  return (
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
            <img className="project-card-logo" src={htmlIcon} alt="HTML Icon" />
            <img className="project-card-logo" src={cssIcon} alt="CSS Icon" />
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
  );
}
