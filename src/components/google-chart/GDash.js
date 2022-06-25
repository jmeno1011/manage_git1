import React from "react";
import Bar from "./components/Bar";
import BarDashboard from "./components/BarDashboard";
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
    </div>
  );
};

export default GDash;
