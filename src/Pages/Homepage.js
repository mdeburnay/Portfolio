import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PortfolioPic2 from "../Images/PortfolioPic2.jpg";

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
            src={PortfolioPic2}
            data-aos="fade in"
            alt="Portfolio Pic"
          />
          <div className="overlay">
            <h1 className="homepage-title" data-aos="fade in">
              Max De Burnay Bastos
              <span className="fullstop">.</span>
            </h1>
            <link
              href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
              rel="stylesheet"
            ></link>
          </div>
        </div>
        <div className="summary" data-aos="fade in" data-aos-delay="500">
          Hi, I'm Max<span className="fullstop">.</span>
          <br></br>
          <br></br>A social, dedicated and passionate individual actively
          seeking a full-stack Software Development role. During a career in
          Technology Recruitment I was always having detailed conversations with
          technologists ranging from developers and IT support to those in IT
          leadership. After learning more about the constantly changing IT
          landscape and it's growing importance within business and society I
          decided to dedicate myself entirely to learning Software Development
          to be part of this digital journey
          <span className="fullstop">.</span>
          <br></br>
          <br></br>
          Working with leading technologies to build web and mobile
          applications, I am keen to join a business that will find value in my
          current skillset and enable to use this for their advantage, as well
          as to continually develop my knowledge in the field
          <span className="fullstop">.</span>
          <br></br>
          <span className="fullstop">.</span>
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
            rel="stylesheet"
          ></link>
        </div>
      </div>
    </div>
  );
}
