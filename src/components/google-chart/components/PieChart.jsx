import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Emotions", "Emotion"],
  ["Angry", 9],
  ["Disgust", 11],
  ["Fear", 2],
  ["Happy", 4],
  ["Neutral", 2],
  ["Sad", 7],
  ["Surprise", 3],
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
  // chartArea: { top: "10%", bottom: "5%" },
};

const PieChart = () => {
  return (
    <div style={{ width: "33.33%" }}>
      <h3 style={{ height: 30, borderBottom: "1px solid gray" }}>PieChart</h3>
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

export default PieChart;
