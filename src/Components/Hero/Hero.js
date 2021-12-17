import React from "react";
import Swiper from "../Swiper/Swiper";
import "../../css/hero.css";

function Hero({ heroText, heroSlides, dateTitle, heroTitle }) {
  return (
    <>
      <Swiper
        heroText={heroText}
        heroSlides={heroSlides}
        dateTitle={dateTitle}
        heroTitle={heroTitle}
      />
    </>
  );
}
export default Hero;
