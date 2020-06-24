import React from "react";
import "./Projects.css";
import KodflixInfo from "./ProjectsList/Kodflix.js";
import Carrate from "./ProjectsList/Carrate.js";
import PomodoroTimer from "./ProjectsList/PomodoroTimer.js";

export default function Projects() {
  return (
    <div className="section-container projects" id="projects">
      <h1 className="section-header" data-aos="fade-right">
        Projects<span className="fullstop">.</span>
      </h1>
      <div className="section-grid-projects" data-aos="fade-right">
        <KodflixInfo />
        <Carrate />
        <PomodoroTimer />
      </div>
    </div>
  );
}
