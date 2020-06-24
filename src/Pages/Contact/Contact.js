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
        <div className="contact-icon-container">
          <a href="https://github.com/mdeburnay" target="_blank">
            <img className="contact-icon" src={gitHubIcon} alt="GitHub Icon" />
          </a>
          <div
            className="contact-icon-text"
            data-aos="fade-in"
            data-aos-delay="500"
          >
            Want to see what's under the hood?
          </div>
        </div>
        <div className="contact-icon-container">
          <a
            href="https://www.linkedin.com/in/max-de-burnay-bastos-009b65197/"
            target="_blank"
          >
            <img
              className="contact-icon"
              src={linkedInIcon}
              alt="LinkedIn Icon"
            />
          </a>

          <div
            className="contact-icon-text"
            data-aos="fade-in"
            data-aos-delay="500"
          >
            ...or shall we get in touch?
          </div>
        </div>
      </div>
    </div>
  );
}
