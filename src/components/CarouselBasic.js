import React, { useRef } from "react";
import Slider from "react-slick";
import cat1 from "./image/cat1.jpg";
import cat2 from "./image/cat2.jpg";
import cat3 from "./image/cat3.jpg";
import cat4 from "./image/cat4.jpg";
import "./Carousel.css";
import { useNavigate } from "react-router-dom";

const CarouselBasic = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <h1>Carousel</h1>
        <button onClick={() => navigate(-1)}>Go back</button>
      </header>
      <div style={{ display: "flex" }}>
        <SimpleSlider />
        <MultiSlider />
      </div>
      <div style={{ display: "flex", marginTop: 10 }}>
        <AutoSlider />
        <ButtonSlider />
      </div>
    </div>
  );
};

export default CarouselBasic;

const SimpleSlider = () => {
  const simpleSettings = {
    dots: true,
    speed: 500,
  };
  return (
    <div className="box">
      <h2>Carousel - Basic</h2>
      <div className="wrapper">
        <Slider {...simpleSettings}>
          <div>
            <img alt="" src={cat1} />
            <p className="legend" align="center">
              cat 1
            </p>
          </div>
          <div>
            <img alt="" src={cat2} />
            <p className="legend" align="center">
              cat 2
            </p>
          </div>
          <div>
            <img alt="" src={cat3} />
            <p className="legend" align="center">
              cat 3
            </p>
          </div>
          <div>
            <img alt="" src={cat4} />
            <p className="legend" align="center">
              cat 4
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

const MultiSlider = () => {
  const multiSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className="box">
      <h2>Carousel - MultiSlider</h2>
      <div className="wrapper2">
        <Slider {...multiSettings}>
          <div>
            <img alt="" src={cat1} />
            <p className="legend" align="center">
              cat 1
            </p>
          </div>
          <div>
            <img alt="" src={cat2} />
            <p className="legend" align="center">
              cat 2
            </p>
          </div>
          <div>
            <img alt="" src={cat3} />
            <p className="legend" align="center">
              cat 3
            </p>
          </div>
          <div>
            <img alt="" src={cat4} />
            <p className="legend" align="center">
              cat 4
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

const AutoSlider = () => {
  const autoSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="box">
      <h2>Carousel - AutoSlider</h2>
      <div className="wrapper">
        <Slider {...autoSettings}>
          <div>
            <img alt="" src={cat1} />
            <p className="legend" align="center">
              cat 1
            </p>
          </div>
          <div>
            <img alt="" src={cat2} />
            <p className="legend" align="center">
              cat 2
            </p>
          </div>
          <div>
            <img alt="" src={cat3} />
            <p className="legend" align="center">
              cat 3
            </p>
          </div>
          <div>
            <img alt="" src={cat4} />
            <p className="legend" align="center">
              cat 4
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

const ButtonSlider = () => {
  const slider = useRef();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const buttonSettings = {
    dots: true,
    speed: 500,
  };
  return (
    <div className="box">
      <h2>Carousel - AutoSlider</h2>
      <div
        style={{ display: "flex", flexDirection: "column", margin: "0 auto" }}
      >
        <div className="wrapper">
          <Slider ref={slider} {...buttonSettings}>
            <div>
              <img alt="" src={cat1} />
              <p className="legend" align="center">
                cat 1
              </p>
            </div>
            <div>
              <img alt="" src={cat2} />
              <p className="legend" align="center">
                cat 2
              </p>
            </div>
            <div>
              <img alt="" src={cat3} />
              <p className="legend" align="center">
                cat 3
              </p>
            </div>
            <div>
              <img alt="" src={cat4} />
              <p className="legend" align="center">
                cat 4
              </p>
            </div>
          </Slider>
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={previous}>
            Previous
          </button>
          <button className="button" onClick={next}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
