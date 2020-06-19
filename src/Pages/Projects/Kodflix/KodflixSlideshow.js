import React, { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import KodflixSlide from "../../../Images/kodflixLogo.png";
import blacKKKlansmanSlide from "../../../Images/blacKKKlansmanSlide.jpg";
import fightClubSlide from "../../../Images/fightClubSlide.jpg";
import inherentViceSlide from "../../../Images/inherentViceSlide.jpg";
import requiemForADreamSlide from "../../../Images/requiemForADreamSlide.jpg";

const kodflixSlides = [
  {
    name: "Photo 1",
    slideId: KodflixSlide,
  },
  {
    name: "Photo 2",
    slideId: blacKKKlansmanSlide,
  },
  {
    name: "Photo 3",
    slideId: fightClubSlide,
  },
  {
    name: "Photo 4",
    slideId: inherentViceSlide,
  },
  {
    name: "Photo 5",
    slideId: requiemForADreamSlide,
  },
];

export default function KodflixSlideshow() {
  return (
    <>
      <Slider speed={2000} slidesToShow={1} infinite={true}>
        {kodflixSlides.map((photo) => {
          return (
            <div key={photo.name}>
              <img src={photo.slideId} />
            </div>
          );
        })}
      </Slider>
    </>
  );
}
