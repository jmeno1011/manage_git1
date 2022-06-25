import React from "react";
import { Chart } from "react-google-charts";

const PieChart = () => {
  return (
    <div>
      <h3>PieChart</h3>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={600}
        height={450}
      />
    </div>
  );
};

export default PieChart;

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

export const options = {
  title: "My Daily Emotions",
  colors: [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#A6372D",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
  ],
  chartArea: { top: "10%", bottom: "5%" },
};
