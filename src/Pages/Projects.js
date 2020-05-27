import React from "react";
import kodflixLogo from "../Images/kodflixLogo.png";

export default function Projects() {
  return (
    <div className="section-container">
      <h1 className="section-header" data-aos="fade-right">
        Projects<span className="fullstop">.</span>
      </h1>
      <div className="section-grid projects">
        <img
          className="project-image"
          data-aos="fade-in"
          data-aos-delay="500"
          src={kodflixLogo}
          alt="Kodflix Logo"
        />
        <div className="project-text" data-aos="fade in">
          Kodflix
        </div>
      </div>
    </div>
  );
}
