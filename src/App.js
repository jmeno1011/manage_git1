import React, { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BtnCarousel from "./components/BtnCarousel";
import SimpleCarousel from "./components/SimpleCarousel";
import SimpleSlider from "./components/SimpleSlider";
import Tab1 from "./components/tabComponent/Tab1";
import Tab2 from "./components/tabComponent/Tab2";
import Tab3 from "./components/tabComponent/Tab3";
import { debounce } from "lodash";
import Tab4 from "./components/tabComponent/Tab4";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = debounce(() => {
    console.log(
      `브라우저 화면 사이즈 x : ${window.innerWidth}, y: ${window.innerHeight}`
    );
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 1000);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, [windowSize]);
  return (
    <div className="App">
      <div className="wrapper">
        {/* <h1>hello</h1>
        <div style={{margin:'10px auto 40px auto'}}>
          tab contents
        <SimpleSlider />
          </div>
        <SimpleCarousel />
         */}

        {/* <div className="tab">bottom</div> */}
        <div className="default-p">기본 페이지</div>
        <Router>
          <Switch>
            <Route path="/Tab1" component={Tab1} />
            <Route path="/Tab2" component={Tab2} />
            <Route path="/Tab3" component={Tab3} />
            <Route path="/Tab4" component={Tab4} />
          </Switch>
          <div className="tab">
            <BtnCarousel />
          </div>
        </Router>
        {/* <div className="contents">
          contents
        </div> */}
      </div>
    </div>
  );
}

export default App;
