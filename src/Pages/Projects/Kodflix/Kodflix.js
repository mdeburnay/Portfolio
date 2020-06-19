import React, { useEffect } from "react";
import "./Kodflix.css";
import AOS from "aos";
import "aos/dist/aos.css";

import KodflixImg from "../../../Images/kodflixLogo.png";

export default function Kodflix() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  setInterval(function () {});

  return (
    <>
      <div className="section-container kodflix">
        <div className="left-container">
          <h1 className="section-header kodflix" data-aos="fade-right">
            Kodflix<span className="fullstop">.</span>
          </h1>
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
            rel="stylesheet"
          ></link>
          <div className="project-container" data-aos="fade-right">
            <div className="summary-title">
              Summary<span className="fullstop">:</span>
            </div>
            <br></br>
            <div className="project-summary">
              A full-stack application bearing similarities to
              <span> Netflix</span>, which allows users to choose from a grid of
              selected movies/series and click for more information.
              <br></br>
              <br></br>
              <div className="key-features-title">
                Key features<span className="fullstop">:</span>
              </div>
              <ul className="key-features-list">
                <li>
                  Used Node.js for back-end data fetching to display page
                  details dynamically.
                </li>
                <li>
                  Utilised UI/UX techniques such as Grid and animations to
                  improve the experience.
                </li>
                <li>Project deployed to the cloud using Heroku</li>
              </ul>
            </div>
            <div className="tech-used-title">
              Tech Used<span className="fullstop">:</span>
            </div>

            <ul className="tech-list">
              <li>JavaScript</li>
              <li>React.js</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Node.js</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
        <div id="slideshow" data-aos="fade in" data-aos-delay="500">
          <div>
            <img className="slideshow-image" src={KodflixImg} />
          </div>
          <div>
            <img className="slideshow-image" src={KodflixImg} />
          </div>
          <div>
            <img className="slideshow-image" src={KodflixImg} />
          </div>
        </div>
      </div>
    </>
  );
}
