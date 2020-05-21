import React from "react";
import kodflixLogo from "../Images/kodflixLogo.png";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects.</h1>
      <div className="projects-grid">
        <img className="project-image" src={kodflixLogo} alt="Project Logo" />
        <div className="overlay">
          <div className="project-text-box">Kodflix</div>
        </div>
      </div>
    </div>
  );
}
