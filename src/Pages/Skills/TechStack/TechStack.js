import React from "react";
import "./TechStack.css";

export default function TechStack(props) {
  return (
    <div className="skills-grid-section">
      <img src={props.logo} className="skills-icon " alt="Skills Icon" />
      <div className="skills-icon-text" data-aos="fade-in" data-aos-delay="500">
        {props.name}
      </div>
    </div>
  );
}
