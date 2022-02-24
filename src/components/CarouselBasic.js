import React from "react";
import Slider from "react-slick";
import cat1 from "./image/cat1.jpg";
import cat2 from "./image/cat2.jpg";
import cat3 from "./image/cat3.jpg";
import cat4 from "./image/cat4.jpg";
import './Carousel.css'

const CarouselBasic = () => {
    var settings = {
        dots: true
      };
  return (
    <div>
      <h1>CarouselBasic</h1>
      {/* <img alt="" src={cat1} /> */}
      <div className="wrapper">
        <Slider {...settings}>
          <div>
            <img alt="" src={cat1} />
            <p className="legend" align="center">Legend 1</p>
          </div>
          <div>
            <img alt="" src={cat2} />
            <p className="legend" align="center">Legend 2</p>
          </div>
          <div>
            <img alt="" src={cat3} />
            <p className="legend" align="center">Legend 3</p>
          </div>
          <div>
            <img alt="" src={cat4} />
            <p className="legend" align="center">Legend 4</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CarouselBasic;
