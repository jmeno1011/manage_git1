import React, { useEffect, useLayoutEffect, useState } from "react";
// import "./App.css";
import "./App2.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BtnCarousel from "./components/BtnCarousel";
import SimpleCarousel from "./components/SimpleCarousel";
import SimpleSlider from "./components/SimpleSlider";
import Tab1 from "./components/tabComponent/Tab1";
import Tab2 from "./components/tabComponent/Tab2";
import Tab3 from "./components/tabComponent/Tab3";
import { debounce, size, toLower } from "lodash";
import Tab4 from "./components/tabComponent/Tab4";
import Footer from "./components/Footer";
import styles from "./Style.module.css"

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [style, setStyle] = useState({
    content:'',
    sectionTwo:'',
  });
  const handleResize = debounce(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    console.log(
      `브라우저 화면 사이즈 x : ${window.innerWidth}, y: ${window.innerHeight}`
    );
    console.log("windowSize : ",windowSize.width);
    if(window.innerWidth<1412){
      setStyle({
        content:styles.content,
        sectionTwo:styles.sectiontwo,
        sThree:styles.sthree,
        sSix:styles.ssix,
        sectionThree:styles.sectionthree,
        sFour:styles.sfour,
        sSeven:styles.sseven,
        sNine:styles.snine
      })
    }
    console.log('style : ',style.content);
  }, 1000);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }; 
  }, []);
  return (
    <>
      <div className="App">
        <div className="wrapper">
          <div className="header">
            <div className="header-left">로고</div>
            <div className="header-right">
              <div>프로필</div>
              <div>|</div>
              <div>로그아웃</div>
            </div>
          </div>
          <div className="title">기본 페이지</div>
          <div className="content-wrapper">
            <div className="content-header">
              <div className="content-title">Title</div>
              <div className="content-help">
                <div>Filter</div>
                <div>❔</div>
              </div>
            </div>
            <div className="content" style={{style}}>
              <div className="section-one">
                <div className="section-one-top">
                  <div className="s-one">section 1</div>
                  <div className="s-two">section 2</div>
                </div>
                <div className="section-one-middle">
                  <div className="s-five">section 5</div>
                </div>
                <div className="section-one-bottom">
                  <div className="s-eight">section 8</div>
                </div>
              </div>
              <div className="section-two" style={style}>
                <div className="s-three" style={style}>section 3</div>
                <div className="s-six" style={style}>section 6</div>
              </div>
              <div className="section-three" style={style}>
                <div className="s-four" style={style}>section 4</div>
                <div className="s-seven" style={style}>section 7</div>
                <div className="s-nine" style={style}>section 9</div>
              </div>
            </div>
            <div className="tab">Tab</div>
          </div>
          {/* <Router>
          <Switch>
            <Route path="/Tab1" component={Tab1} />
            <Route path="/Tab2" component={Tab2} />
            <Route path="/Tab3" component={Tab3} />
            <Route path="/Tab4" component={Tab4} />
          </Switch>
          <div className="tab">
            <BtnCarousel />
          </div>
        </Router> */}
        </div>
      <Footer />
      </div>
    </>
  );
}

export default App;
