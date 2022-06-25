import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["회차", "A", "B", "C", "D", "E"],
  ["1회차", 34, 5, 22, 5, 18],
  // ["2회차", 7, 1, 4, 1, 8],
];

const options = {
  colors: ["#7ECA62", "#17DCA4", "#07CFDA", "#009CD8", "#0E6EC6"],
};

const Bar = () => {
  return (
    <div style={{ width: "33.33%" }}>
      <h3 style={{ height: 30, borderBottom: "1px solid gray" }}>Bar</h3>
      <Chart
        chartType="Bar"
        width="100%"
        height="calc(100% - 30px)"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Bar;
