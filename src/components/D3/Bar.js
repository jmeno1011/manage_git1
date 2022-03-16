import React, { useRef, useEffect, useState } from "react";
import { select, scaleBand, scaleLinear, axisBottom, axisLeft } from "d3";
// https://darrengwon.tistory.com/1140?category=942624
// 위 블로그에서 참고중
const Bar = () => {
  const [data, setData] = useState([24, 30, 45, 70, 26]);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current); // selection 객체

    // scale 그래프의 크기를 나타냄
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      // range([0, 300])=> 300px xScale이면 가로로
      .range([0, 300])
      // padding(0.5) => 그래프간의 간격
      .padding(0.5);

    // domain([0, 150]) => 데이터의 범위 0~150
    // range([150, 0]) => 150px의 세로
    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

    // axis
    const xAxis = axisBottom(xScale).ticks(data.length);
    svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);

    const yAxis = axisLeft(yScale);
    svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("x", (value, index) => xScale(index))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth())
      .attr("height", (value, index) => 150 - yScale(value));
  }, [data]);

  return (
    <>
      {/* <div style={{ padding: 50, background: "#f7982c" }}> */}
      <div style={{ padding: 50 }}>
        <svg
          ref={svgRef}
          style={{ margin: 5, border: "1px solid", padding: 10 }}
        >
          <g className="y-axis" />
          <g className="x-axis" />
        </svg>
      </div>
    </>
  );
};

export default Bar;
