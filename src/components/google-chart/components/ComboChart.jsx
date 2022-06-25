import React from "react";
import { Chart } from "react-google-charts";

const data = [
  [
    "Month",
    "Bolivia",
    "Ecuador",
    "Madagascar",
    "Papua New Guinea",
    "Rwanda",
    "Average",
  ],
  ["2004/05", 165, 938, 522, 998, 450, 614.6],
  ["2005/06", 135, 1120, 599, 1268, 288, 682],
  ["2006/07", 157, 1167, 587, 807, 397, 623],
  ["2007/08", 139, 1110, 615, 968, 215, 609.4],
  ["2008/09", 136, 691, 629, 1026, 366, 569.6],
];
const options = {
  //   title: "Monthly Coffee Production by Country",
  vAxis: { title: "Cups" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  series: { 5: { type: "line" } },
  chartArea: {
    top: 12,
    left: "15%",
    right: "20%",
    bottom: 24,
  },
};

const ComboChart = () => {
  return (
    <div style={{ width: "33.33%" }}>
      <h3 style={{ height: 30, borderBottom: "1px solid gray" }}>ComboChart</h3>
      <Chart
        chartType="ComboChart"
        width="100%"
        height="calc(100% - 30px)"
        data={data}
        options={options}
      />
    </div>
  );
};

export default ComboChart;
