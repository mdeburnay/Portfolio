import React from "react";
import "./Homepage.css";

import portfolioPic from "../../Images/PortfolioPic2.jpeg";

export default function Homepage() {
  return (
    <>
      <div className="section-container homepage" id="home">
        <img
          data-aos="fade"
          data-aos-delay="1000"
          className="portfolio-image"
          src={portfolioPic}
          alt="Portfolio Main"
        />
        <div className="header" data-aos="fade">
          Hi<span></span>
          <span data-aos="fade" data-aos-delay="1000">
            , I'm Max<span className="fullstop">.</span>
          </span>
        </div>
        <br />
        
      </div>
    </>
  );
}
