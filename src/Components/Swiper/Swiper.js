import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../css/hero.css";
const Swiper = ({ heroSlides, heroText }) => {
  return (
    <div className="carouselDiv ">
      <Carousel variant="light" interval="5000" controls={false} touch={true}>
        {heroSlides.map((sliderimage, index) => {
          return (
            <Carousel.Item key={index}>
              <img src={sliderimage.image} alt={sliderimage.alt} />
              <Carousel.Caption className="heroText">
                <h1 className="heroTitle">{heroText.title}</h1>
                <h5>{heroText.date}</h5>
                <p>{heroText.subtitle}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Swiper;
