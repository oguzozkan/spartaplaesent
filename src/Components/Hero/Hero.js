import React from "react";
import Swiper from "../Swiper/Swiper";
import "../../Css/home.css";

function Hero({ heroText, heroSlides }) {
  return (
    <>
      <Swiper heroText={heroText} heroSlides={heroSlides} />
    </>
  );
}
export default Hero;
