import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];
const options = {
  // title: "My Daily Emotions",
  colors: [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#A6372D",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
  ],
  // 이게 구멍 핵심
  pieHole: 0.4,
  // chartArea: { top: "10%", bottom: "5%" },
};

const DonutChart = () => {
  return (
    <div style={{ width: "33.33%" }}>
      <h3 style={{ height: 30, borderBottom: "1px solid gray" }}>DonutChart</h3>
      <Chart
        chartType="PieChart"
        width="100%"
        height="calc(100% - 30px)"
        data={data}
        options={options}
      />
    </div>
  );
};

export default DonutChart;
