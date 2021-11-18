import React from "react";
// import Slider from "react-slick";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slider,
  Slide,
} from "pure-react-carousel";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useHistory } from "react-router";

const BtnCarousel = () => {
  const history = useHistory();
  return (
    <CarouselProvider
      totalSlides={4}
      naturalSlideWidth={2}
      naturalSlideHeight={0.7}
      visibleSlides={3}
      currentSlide={0}
      dragEnabled={false}
      style={{
        position: "relative",
        height: "35px",
        display: "flex",
      }}
    >
      <div style={{ display: "flex", height: "35px" }}>
        <ButtonBack>◀</ButtonBack>
        <ButtonNext>▶</ButtonNext>
      </div>
      <div style={{ height: "35px",  }}>
        <Slider className="slider">
          {/* <Slide className="slide" style={{height:'35px',width:'50px'}} */}
          <Slide className="slide"
            // tag="a"
            index={0}
            // onFocus={'No'}
          >
            <a onClick={()=>history.push('/Tab1')}>
            <p className="slide-p">tab1</p>
            </a>
            {/* <Link to="/Tab1">
              <p className="slide-p">tab1</p>
            </Link> */}
          </Slide>
          <Slide className="slide"
            // tag="a"
            index={1}
          >
            <Link to="/Tab2">
              <p className="slide-p">tab2</p>
            </Link>
          </Slide>
          <Slide className="slide"
            // tag="a"
            index={2}
          >
            <Link to="/Tab3">
              <p className="slide-p">tab3</p>
            </Link>
          </Slide>
          <Slide className="slide"
            // tag="a"
            index={3}
          >
            <Link to="/Tab4">
              <p className="slide-p">tab4</p>
            </Link>
          </Slide>
        </Slider>
      </div>
    </CarouselProvider>
  );
};

export default BtnCarousel;
