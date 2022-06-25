import React from "react";
import { Chart } from "react-google-charts";

const options = {
  title: "My BDI Diagnosis",
  colors: ["#5DC262"],
  hAxis: {
    format: "#",
    slantedText: "true",
  },
  chartArea: { left: "5%", right: "10%" },
};

const ColumnChart = () => {
  return (
    <div>
      ColumnChart
      <Chart
        chartType="ColumnChart"
        width="100%"
        height={500}
        data={data}
        options={options}
      />
    </div>
  );
};

export default ColumnChart;

const data = [
  ["City", "1회차"],
  ["City01", 2],
  ["City02", 1],
  ["City03", 1],
  ["City04", 3],
  ["City05", 2],
  ["City06", 3],
  ["City07", 2],
  ["City08", 3],
  ["City09", 1],
  ["City10", 2],
  ["City11", 3],
  ["City12", 3],
  ["City13", 2],
  ["City14", 2],
  ["City15", 2],
  ["City16", 2],
  ["City17", 3],
  ["City18", 2],
  ["City19", 1],
  ["City20", 1],
  ["City21", 2],
];
