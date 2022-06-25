import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Name", "Age"],
  ["Michael", 12],
  ["Elisa", 20],
  ["Robert", 7],
  ["John", 54],
  ["Jessica", 22],
  ["Aaron", 3],
  ["Margareth", 42],
  ["Miranda", 33],
];

const BarDashboard = () => {
  return (
    <div style={{ width: "100%" }}>
      <h3 style={{ height: 30, borderBottom: "1px solid gray" }}>
        BarDashboard
      </h3>
      <Chart
        width={"100%"}
        height={"calc(100% - 30px)"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={data}
        rootProps={{ "data-testid": "6" }}
        chartPackages={["corechart", "controls"]}
        render={({ renderControl, renderChart }) => {
          return (
            <div>
              <div
                style={{
                  width: "100%",
                  padding: "8px",
                  background: "white",
                }}
              >
                {renderControl(() => true)}
              </div>
              <div style={{ width: "100%" }}>{renderChart()}</div>
            </div>
          );
        }}
        controls={[
          {
            controlType: "StringFilter",
            options: {
              filterColumnIndex: 0,
              matchType: "any", // 'prefix' | 'exact',
              ui: {
                label: "Search by name",
              },
            },
          },
          {
            controlType: "NumberRangeFilter",
            controlID: "age-filter",
            options: {
              filterColumnIndex: 1,
              ui: {
                labelStacking: "vertical",
                label: "Age Selection:",
                allowTyping: false,
                allowMultiple: false,
              },
            },
          },
        ]}
      />
    </div>
  );
};

export default BarDashboard;
