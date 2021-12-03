import React from "react";
import Chart from "react-google-charts";

// const CGI_chart = ({ currentSeq }) => {
const CGI_chart = ({ data2 }) => {
//   var data_arr = [
//     ["회차", "CGI", { role: "tooltip", type: "string", p: { html: true } }],
//   ];

//   currentSeq &&
//     currentSeq.map((value) => {
//       return data_arr.push([
//         value["seq_q"],
//         value["ccgi"],
//         `<div style="margin: 0 5px;"><h3>회차 : ${value["seq_q"]}회차</h3><h3>CGI : ${value["ccgi"]}</h3></div>`,
//       ]);
//     });
//   if (data_arr.length === 1||data_arr[1][1]===null) {
//     return (
//       <div
//         style={{ paddingTop: "5rem", textAlign: "center", fontSize: "2rem" }}
//       >
//         데이터가 없습니다.
//       </div>
//     );
//   }
// console.log(data2);
  return (
    <>
      <Chart
        width={"100%"}
        chartType="LineChart"
        height={"100%"}
        loader={<div>Loading Chart</div>}
        data={data2}
        options={{
          hAxis: {
            format: "#",
            textStyle: {
              fontName: "Roboto",
              italic: false,
              fontSize: 12,
              color: "white",
            },
            gridlines: { color: "transparent" },
            viewWindow: {
              min: 1,
            },
          },
          vAxis: {
            //   title: 'Popularity',
            format: "#",
            textStyle: {
              fontName: "Roboto",
              italic: false,
              fontSize: 12,
              color: "white",
            },
            gridlines: { color: "transparent" },
            viewWindow: {
              // max: 7,
              min: 50,
            },
          },
          
          lineWidth: 2,
          colors: ["#23C997"],
        //   pointsVisible: true,
          // backgroundColor: "#373F51",
          backgroundColor: "transparent",
          chartArea: { width: "95%", top: 20, bottom: 35, stroke: "#373F51" },
          legend: "none",
        //   crosshair: { trigger: "both" },
        //   tooltip: { isHtml: true },
        }}
      />
    </>
  );
};

export default CGI_chart;
