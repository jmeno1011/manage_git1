import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  colors: ["#7ECA62", "#17DCA4", "#07CFDA", "#009CD8", "#0E6EC6"],
  title: "Before & After",
  chart: {
    title: "ABCDE Bar ",
    subtitle: "Bar !== Barchart",
  },
  chartArea: {
    backgroundColor: {
      fill: "green",
      fillOpacity: 10,
    },
    top: 20,
    left: 20,
    right: 20,
    width: "90%",
  },
  backgroundColor: "red",
  legend: { position: "bottom", alignment: "start" },
};

const Bar = () => {
  return (
    <div>
      <h3>Bar</h3>
      <Chart
        chartType="Bar"
        width="500px"
        height="500px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Bar;

export const data = [
  ["회차", "A", "B", "C", "D", "E"],
  ["1회차", 34, 5, 22, 5, 18],
  ["2회차", 7, 1, 4, 1, 8],
];
