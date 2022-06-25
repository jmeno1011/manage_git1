import React from "react";
import Bar from "./components/Bar";
import BarDashboard from "./components/BarDashboard";
import ColumnChart from "./components/ColumnChart";
import PieChart from "./components/PieChart";
import TableDashboard from "./components/TableDashboard";

const GDash = () => {
  return (
    <div style={{ padding: "16px" }}>
      <h2>GDash</h2>
      <hr />
      <BarDashboard />
      <hr />
      <TableDashboard />
      <hr />
      <Bar />
      <hr />
      <ColumnChart />
      <hr />
      <PieChart />
    </div>
  );
};

export default GDash;
