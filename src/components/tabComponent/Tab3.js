import React from "react";
import Chart from "react-google-charts";

const Tab3 = () => {
  return (
    <>
      <h1>Tab3</h1>
      <p>Third tab</p>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
        //   flexDirection: "column",
        }}
      >
        <div style={{ width: "100%", height: "100%", display: "flex", paddingRight:'5px'}}>
          <div style={{ width: "100%", height: "100%", paddingRight: "5px" }}>
            <Chart
              width={"100%"}
              height={"100%"}
              chartType="AreaChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Year", "Sales", "Expenses"],
                ["2013", 1000, 400],
                ["2014", 1170, 460],
                ["2015", 660, 1120],
                ["2016", 1030, 540],
              ]}
              options={{
                title: "Company Performance",
                hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
                vAxis: { minValue: 0 },
                // For the legend to fit, we make the chart area smaller
                chartArea: { width: "50%", height: "70%" },
                // lineWidth: 25
              }}
              // For tests
              rootProps={{ "data-testid": "1" }}
            />
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <Chart
              width={"100%"}
              height={"100%"}
              chartType="AreaChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Year", "Sales", "Expenses"],
                ["2013", 1000, 400],
                ["2014", 1170, 460],
                ["2015", 660, 1120],
                ["2016", 1030, 540],
              ]}
              options={{
                title: "Company Performance",
                hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
                vAxis: { minValue: 0 },
                // For the legend to fit, we make the chart area smaller
                chartArea: { width: "50%", height: "70%" },
                // lineWidth: 25
              }}
              // For tests
              rootProps={{ "data-testid": "1" }}
            />
          </div>
        </div>
        <div style={{ width: "100%", height: "100%", display: "flex",flexDirection: "column",paddingRight:'5px' }}>
          <div style={{ width: "100%", height: "100%", paddingBottom:'5px'}}>
            {/* ///////////// */}
            <Chart
              width={"100%"}
              height={"100%"}
              chartType="AreaChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Year", "Sales", "Expenses"],
                ["2013", 1000, 400],
                ["2014", 1170, 460],
                ["2015", 660, 1120],
                ["2016", 1030, 540],
              ]}
              options={{
                title: "Company Performance",
                hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
                vAxis: { minValue: 0 },
                // For the legend to fit, we make the chart area smaller
                chartArea: { width: "50%", height: "70%" },
                // lineWidth: 25
              }}
              // For tests
              rootProps={{ "data-testid": "1" }}
            />
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <Chart
              width={"100%"}
              height={"100%"}
              chartType="AreaChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Year", "Sales", "Expenses"],
                ["2013", 1000, 400],
                ["2014", 1170, 460],
                ["2015", 660, 1120],
                ["2016", 1030, 540],
              ]}
              options={{
                title: "Company Performance",
                hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
                vAxis: { minValue: 0 },
                // For the legend to fit, we make the chart area smaller
                chartArea: { width: "50%", height: "70%" },
                // lineWidth: 25
              }}
              // For tests
              rootProps={{ "data-testid": "1" }}
            />
          </div>
        </div>
        <div style={{ width: "100%", height: "100%", display: "flex",flexDirection: "column", }}>
          <div style={{ width: "100%", height: "100%",paddingBottom:'5px' }}>
            <Chart
              width={"100%"}
              height={"100%"}
              chartType="AreaChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Year", "Sales", "Expenses"],
                ["2013", 1000, 400],
                ["2014", 1170, 460],
                ["2015", 660, 1120],
                ["2016", 1030, 540],
              ]}
              options={{
                title: "Company Performance",
                hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
                vAxis: { minValue: 0 },
                // For the legend to fit, we make the chart area smaller
                chartArea: { width: "50%", height: "70%" },
                // lineWidth: 25
              }}
              // For tests
              rootProps={{ "data-testid": "1" }}
            />
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <Chart
              width={"100%"}
              height={"100%"}
              chartType="AreaChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Year", "Sales", "Expenses"],
                ["2013", 1000, 400],
                ["2014", 1170, 460],
                ["2015", 660, 1120],
                ["2016", 1030, 540],
              ]}
              options={{
                title: "Company Performance",
                hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
                vAxis: { minValue: 0 },
                // For the legend to fit, we make the chart area smaller
                chartArea: { width: "50%", height: "70%" },
                // lineWidth: 25
              }}
              // For tests
              rootProps={{ "data-testid": "1" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab3;
