import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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
import styles from "./Style.module.css";
import $ from "jquery";
import axios from "axios";
import moment from "moment";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import io from "socket.io-client";
import CGI_chart from "./components/chart";

const socket = io('http://localhost:3001', {
  transports: ['websocket', 'polling']
});

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = debounce(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    console.log(
      `브라우저 화면 사이즈 x : ${window.innerWidth}, y: ${window.innerHeight}`
    );
    console.log("windowSize : ", windowSize.width);
    if (window.innerWidth < 1412) {
      // $(`.${styles.sectionthree}`).insertBefore(".section-one");
    }
  });
  const [cpustore, setCpustore] = useState();
  const [time, setTime] = useState(moment());
  const [data1, setData1] = useState([{ name: "시간", value: 0 }]);
  const [data2, setData2] = useState([["회차", "CGI"]]);
  const [data3, setData3] = useState([]);
  // const [data, setData] = useState([['시간','cpu %']]);
  const cpu = async () => {
    try {
      await axios.get("http://localhost:3333/cpu").then((res) => {
        // console.log(res.data)
        setTime(moment());
        setCpustore(res.data.toFixed(2));
        const in_data = {
          name: cpustore,
          value: time.format("HH.mm.ss"),
        };
        setData1((current) => [
          ...current,
          {
            name: moment().format("HH.mm.ss"),
            value: res.data,
          },
        ]);
        setData2((current) => [
          ...current,
          [moment().format("HH.mm.ss"), res.data],
        ]);
        // setData(data.concat(in_data));
        // console.log('시간 : '+time.format('HH.mm.ss')+", cpu : "+cpustore);
      });
    } catch (e) {
      throw e;
    }
  };
  let timer = null;
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    timer = setInterval(() => {
      cpu();
    }, 1000);
    socket.on('cpu', cpuPercent => {
      setData3(currentData => [...currentData, cpuPercent]);
    });
    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", handleResize);
      $(`.section-three`).insertAfter(`.section-two`);
    };
  }, []);
  // console.log(data2)
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
          <div style={{display:'flex',justifyContent:'center'}}>
            <div className="chart">
            <LineChart
              width={1920}
              height={100}
              data={data1}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <Line type="monotone" dataKey="value" stroke="white" />
            </LineChart>
          </div>
          <hr/>
          <div className="ibox"> 
              <div className="index">CPU : {cpustore}</div>
              <div className="index">TIME : {time.format("HH.mm.ss")}</div>
            </div>
          </div>
         {/* <div className="chart">
           <LineChart width={500} height={300} data={data3}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" />
      </LineChart>
      </div> */}
          
          {/* <div className="title">기본 페이지 //// DATA : {data.name}</div> */}
          <div className="content-wrapper">
            <div
              className={
                window.innerWidth < 1412
                  ? styles.contentheader
                  : "content-header"
              }
            >
              <div className="content-title">Title</div>
              {/* <div className={window.innerWidth < 1412 ? styles.contenthelp : "content-help"}> */}
              <div className={"content-help"}>
                <div>Filter</div>
                <div>❔</div>
              </div>
            </div>
            <div
              className={window.innerWidth < 1412 ? styles.content : "content"}
            >
              <div className="section-one">
                <div className="section-one-top">
                  <div className="s-one">section 1</div>
                  <div
                    className={window.innerWidth < 1412 ? styles.stwo : "s-two"}
                  >
                    section 2
                  </div>
                </div>
                <div className="section-one-middle">
                  <div
                    className={
                      window.innerWidth < 1412 ? styles.sfive : "s-five"
                    }
                  >
                    section 5
                  </div>
                </div>
                <div className="section-one-bottom">
                  <div
                    className={
                      window.innerWidth < 1412 ? styles.seight : "s-eight"
                    }
                  >
                    section 8
                  </div>
                </div>
              </div>
              <div
                className={
                  window.innerWidth < 1412 ? styles.sectiontwo : "section-two"
                }
              >
                <div
                  className={
                    window.innerWidth < 1412 ? styles.sthree : "s-three"
                  }
                >
                  section 3
                </div>
                <div
                  className={window.innerWidth < 1412 ? styles.ssix : "s-six"}
                >
                  section 6{/* <CGI_chart data2={data2}/> */}
                </div>
              </div>
              <div
                className={
                  window.innerWidth < 1412
                    ? styles.sectionthree
                    : "section-three"
                }
              >
                <div
                  className={window.innerWidth < 1412 ? styles.sfour : "s-four"}
                >
                  section 4
                </div>
                <div
                  className={
                    window.innerWidth < 1412 ? styles.sseven : "s-seven"
                  }
                >
                  section 7
                </div>
                <div
                  className={window.innerWidth < 1412 ? styles.snine : "s-nine"}
                >
                  section 9
                </div>
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
