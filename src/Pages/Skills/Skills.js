import React from "react";
import TechStack from "./TechStack/TechStack.js";
import "./Skills.css";
import getTechGrid from "./TechStack/getTechGrid.js";

export default function Skills() {
  return (
    <div className="section-container skills" id="skills">
      <h1 className="section-header" data-aos="fade-right">
        Skills<span className="fullstop">.</span>
      </h1>
      <div className="section-grid-skills" data-aos="fade-in">
        {getTechGrid().map((tech) => (
          <TechStack key={tech.name} name={tech.name} logo={tech.logo} />
        ))}
      </div>
    </div>
  );
}
