import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PortfolioPic from "../Images/PortfolioPic.JPG";

export default function Homepage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="homepage-container">
        <div className="left-container">
          <img
            className="portfolio-image"
            src={PortfolioPic}
            data-aos="fade in"
            alt="Portfolio Pic"
          />
          <div className="overlay">
            <h1 className="homepage-title" data-aos="fade in">
              MAX DE<br></br>BURNAY<br></br>BASTOS
              <span className="fullstop">.</span>
            </h1>
            <link
              href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
              rel="stylesheet"
            ></link>
          </div>
        </div>
        <div className="summary" data-aos="fade in" data-aos-delay="500">
          Fullstack software developer with experience in developing clean,
          responsive websites with the user in mind. After a brief career in
          Technology Recruitment I decided to delve into the world of tech
          myself, building projects with some of the most relevant technologies
          in the market. Take a look at my portfolio to see what I have been up
          to<span className="fullstop">.</span>
        </div>
      </div>
    </div>
  );
}
