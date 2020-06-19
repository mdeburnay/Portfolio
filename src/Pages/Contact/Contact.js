import React from "react";
import "./Contact.css";
import gitHubIcon from "../../Images/githubIcon.svg";
import linkedInIcon from "../../Images/linkedInIcon.svg";

export default function Contact() {
  return (
    <div className="section-container contact" id="contact">
      <h1 className="section-header" data-aos="fade-right">
        Contact<span className="fullstop">.</span>
      </h1>
      <div className="section-grid-contact" data-aos="fade-in">
        <img className="contact-icon" src={gitHubIcon} />
        <img className="contact-icon" src={linkedInIcon} />
        <div
          className="skills-icon-text"
          data-aos="fade-in"
          data-aos-delay="500"
        >
          Check out more...
        </div>
        <div
          className="skills-icon-text"
          data-aos="fade-in"
          data-aos-delay="500"
        >
          ...or get in touch.
        </div>
      </div>
    </div>
  );
}
