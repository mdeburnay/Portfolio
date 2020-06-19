import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="section-container" id="about">
        <h1
          className="section-header kodflix"
          data-aos="fade-right"
          offset="400"
        >
          About<span className="fullstop">.</span>
        </h1>
        <div className="summary" data-aos="fade" data-aos-delay="500">
          Like many graduates these days, after finishing University with a
          First Class Honours degree in History I still wasn't sure on what I
          wanted my career to be. During my search, a fantastic role opportunity
          presented itself as a Resourcer for a leading IT recruitment agency.
          Given that I love talking to people and possess great resilience, I
          took the role.
          <br />
          <br />
          <div>
            While in IT recruitment, I consistently had meaning conversations
            and meetings with seasoned IT professionals, ranging from those in
            Development and Architecture, Programme and Project Management, to
            the CIO and CTO. It was through these engagements that my interest
            and curiosity around technology piqued. In an age where technology
            is a growing innovator and driving force for businesses globally,
            being part of something that consistently reinvents and builds upon
            the way we operate at a corporate and social level, and ultimately
            having the opportunity to consistently learn and develop throughout
            your career seemed like an incredibly exciting prospect.
          </div>
          <br />
          <div>
            In turn, I began learning basic web development in my spare time,
            and knew this was exactly what I wanted to do with my professional
            life. After roughly a year of studying I decided to leave my role as
            a Recruitment Consultant and join an intensive 8-week programming
            Bootcamp to hone my skills and learn as much as possible in
            preparation for the market.
          </div>
          <br />
          <div>
            Now, I'm actively seeking my first opportunity as a
            Full-stack/Front-End Web Developer for a business that will see my
            technical skills, enthusiasm and passion for coding as a valuable
            asset.
          </div>
          <br />
          <div>
            Of course, that's not all I enjoy. I'm a pretty active person and
            have a variety of interest; whether it be running the 2019
            Birmingham Half Marathon, fighting professionally in Muay Thai,
            playing board and online games with friends or travelling across the
            world.
          </div>
          <br />
          <div>
            But enough talk. Let's have a look below and see what I can offer
            your business.
          </div>
        </div>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        ></link>
      </div>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
        rel="stylesheet"
      ></link>
    </>
  );
}
