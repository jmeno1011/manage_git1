import React from "react";
import AreaChart from "./components/AreaChart";
import Bar from "./components/Bar";
import BarChart from "./components/BarChart";
import BarDashboard from "./components/BarDashboard";
import ColumnChart from "./components/ColumnChart";
import ComboChart from "./components/ComboChart";
import DonutChart from "./components/DonutChart";
import Line from "./components/Line";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import TableDashboard from "./components/TableDashboard";

const GoogleChart = () => {
  return (
    <div style={{ padding: "16px" }}>
      <h2>Google-Chart</h2>
      <hr />
      <div
        style={{
          padding: "12px",
          background: "white",
          display: "flex",
          height: "300px",
        }}
      >
        <Bar />
        <BarChart />
        <ColumnChart />
      </div>
      <div
        style={{
          padding: "12px",
          background: "white",
          display: "flex",
          height: "300px",
        }}
      >
        <Line />
        <LineChart />
        <AreaChart />
      </div>
      <div
        style={{
          padding: "12px",
          background: "white",
          display: "flex",
          height: "300px",
        }}
      >
        <ComboChart />
        <PieChart />
        <DonutChart />
      </div>
      <hr />
      <div
        style={{
          padding: "12px",
          background: "white",
          display: "flex",
          height: "350px",
        }}
      >
        <BarDashboard />
      </div>
      <hr />
      <div
        style={{
          padding: "12px",
          background: "white",
          display: "flex",
          height: "300px",
        }}
      >
        <TableDashboard />
      </div>
    </div>
  );
};

export default GoogleChart;
