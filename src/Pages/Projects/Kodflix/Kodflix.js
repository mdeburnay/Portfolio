import React, { useEffect } from "react";
import "./Kodflix.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Kodflix() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
          <div className="summary kodflix" data-aos="fade-right">
            <div className="summary-title">
              Tech Used<span className="fullstop">:</span>
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
        </div>
      </div>
    </>
  );
}
