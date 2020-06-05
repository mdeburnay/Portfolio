import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Projects.css";

import kodflixLogo from "../../Images/kodflixLogo.png";

export default function Projects() {
  return (
    <Router>
      <div className="section-container projects" id="projects">
        <h1 className="section-header" data-aos="fade-right">
          Projects<span className="fullstop">.</span>
        </h1>
        <div className="section-grid-projects">
          <img
            className="project-image"
            data-aos="fade-in"
            data-aos-delay="500"
            src={kodflixLogo}
            alt="Kodflix Logo"
          />
          <Link
            to="/projects/kodflix"
            className="project-text"
            data-aos="fade in"
          >
            Kodflix
          </Link>
        </div>
      </div>
    </Router>
  );
}
