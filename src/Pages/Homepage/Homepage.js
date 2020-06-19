import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Homepage.css";

import portfolioPic from "../../Images/PortfolioPic2.jpeg";

export default function Homepage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
          Hi,<span> </span>
          <span data-aos="fade" data-aos-delay="1000">
            I'm Max<span className="fullstop">.</span>
          </span>
        </div>
        <br />
      </div>
    </>
  );
}
