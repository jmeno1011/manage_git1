import React, { useState } from "react";
import Carousel from "react-simply-carousel";

const SimpleCarousel = () =>{
    const [activeSlide, setActiveSlide] = useState(0);

    return (
      <div style={{margin:'10px auto 40px auto'}}>
        <Carousel
          updateOnItemClick
          containerProps={{
            style: {
              width: "100%",
            //   justifyContent: "space-between"
            margin: '0 auto'
            }
          }}
          activeSlideIndex={activeSlide}
          activeSlideProps={{
            style: {
              background: "#7777f4"
            }
          }}
          onRequestChange={setActiveSlide}
          forwardBtnProps={{
            children: ">",
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: "center"
            }
          }}
          backwardBtnProps={{
            children: "<",
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: "center"
            }
          }}
          itemsToShow={3}
          speed={400}
        >
          {Array.from({ length: 10 }).map((item, index) => (
            <div
              style={{
                background: "#f27676",
                width: 300,
                height: 300,
                border: "30px solid white",
                textAlign: "center",
                lineHeight: "240px",
                boxSizing: "border-box"
              }}
              key={index}
            >
              {index}
            </div>
          ))}
        </Carousel>
          {/* <button><backwardBtnProps>back</backwardBtnProps></button>
          <button><forwardBtnProps>forward</forwardBtnProps></button> */}
      </div>
    );
}

export default SimpleCarousel;