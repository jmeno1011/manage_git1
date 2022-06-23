import React from "react";
import { Chart, ReactGoogleChartEvent } from "react-google-charts";

const GDash = () => {
  return (
    <>
      <div>GDash</div>
      <Chart
        width={"100%"}
        height={"100%"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Name", "Age"],
          ["Michael", 12],
          ["Elisa", 20],
          ["Robert", 7],
          ["John", 54],
          ["Jessica", 22],
          ["Aaron", 3],
          ["Margareth", 42],
          ["Miranda", 33],
        ]}
        rootProps={{ "data-testid": "6" }}
        chartPackages={["corechart", "controls"]}
        render={({ renderControl, renderChart }) => {
          return (
            <div style={{ display: "flex" }}>
              <div style={{ width: "40%" }}>{renderControl(() => true)}</div>
              <div style={{ width: "60%" }}>{renderChart()}</div>
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
      <Chart
        chartType="Table"
        width="80%"
        height="400px"
        data={data}
        chartPackages={["corechart", "controls"]}
        controls={[
          {
            controlType: "DateRangeFilter",
            options: {
              filterColumnLabel: "Year",
              ui: { format: { pattern: "yyyy" } },
            },
          },
        ]}
      />
    </>
  );
};

export default GDash;

const data = [
  ["Extrasolar planet", "Comment", "Year"],
  [
    "Gamma Cephei Ab",
    "Deduced from radial velocity variations of the star Gamma Cephei",
    new Date(1988, 6, 13),
  ],
  [
    "HD 114762 b",
    "At least 11 times the mass of Jupiter",
    new Date(1989, 4, 4),
  ],
  [
    "PSR B1257+12",
    "First confirmed discovery of an extrasolar planet",
    new Date(1992, 0, 22),
  ],
  ["51 Pegasi b", "Hot Jupiter with a 4.2 day orbit", new Date(1995, 9, 6)],
  [
    "47 Ursae Majoris b",
    "First long-period planet discovered",
    new Date(1996, 0, 17),
  ],
  [
    "Upsilon Andromedae",
    "First multiple planetary system around a main sequence star",
    new Date(1996, 7, 12),
  ],
  [
    "Gliese 876 b",
    "First planet found orbiting a red dwarf",
    new Date(1998, 5, 23),
  ],
  [
    "HD 209458 b",
    "First exoplanet seen transiting its parent star",
    new Date(1999, 10, 5),
  ],
  [
    "Iota Draconis b",
    "Provided evidence that planets can exist around giant stars",
    new Date(2002, 0, 8),
  ],
  [
    "PSR B1620-26 b",
    "12.7 billion year old planet orbiting a binary star system",
    new Date(2003, 6, 10),
  ],
  [
    "2M1207 b",
    "First planet found orbiting a brown dwarf",
    new Date(2004, 6, 22),
  ],
  ["Mu Arae c", "Hot Neptune", new Date(2004, 7, 25)],
  [
    "TrES-1 and HD 209458 b",
    "First detection of light from exoplanets",
    new Date(2005, 2, 22),
  ],
  [
    "OGLE-2005-BLG-390Lb",
    "Detected used gravitational microlensing",
    new Date(2006, 1, 25),
  ],
];