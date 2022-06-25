import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

const options = {
  chartArea: {
    top: 12,
    left: "15%",
    right: 24,
    bottom: 24,
  },
  legend: { position: "bottom" },
};

const BarChart = () => {
  return (
    <div style={{ width: "33.33%" }}>
      <h3 style={{ height: 30, borderBottom: "1px solid gray" }}>BarChart</h3>
      <Chart
        chartType="BarChart"
        width="100%"
        height="calc(100% - 30px)"
        data={data}
        options={options}
      />
    </div>
  );
};

export default BarChart;
