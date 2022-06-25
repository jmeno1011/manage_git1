import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["City", "1회차"],
  ["City01", 2],
  ["City02", 1],
  ["City03", 1],
  ["City04", 3],
  ["City05", 2],
  ["City06", 3],
];

const options = {
  // colors: ["#5DC262"],
  // colors: ["#b147ff"],
  colors: ["#bf47ff"],
  hAxis: {
    format: "#",
    slantedText: "true",
  },
  chartArea: {
    top: 12,
    left: "15%",
    right: 24,
    bottom: 24,
  },
  legend: { position: "bottom" },
};

const ColumnChart = () => {
  return (
    <div style={{ width: "33.33%" }}>
      <h3 style={{ height: 30, borderBottom: "1px solid gray" }}>
        ColumnChart
      </h3>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="calc(100% - 30px)"
        data={data}
        options={options}
      />
    </div>
  );
};

export default ColumnChart;
