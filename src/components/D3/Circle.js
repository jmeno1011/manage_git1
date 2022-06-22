import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const circleRadius = [5, 10, 15, 20, 25];

const Circle = () => {
  const initRef = useRef();
  const svgRef = useRef();

  useEffect(() => {
    // 그림 그릴 곳을 선택함
    const svg = d3.select(initRef.current);
    svg.attr("viewBox", [0, 0, 200, 200]);

    svg
      .append("circle")
      .attr("cx", 75)
      .attr("cy", 75)
      .attr("r", 50)
      .attr("stroke", "black")
      .attr("fill", "#69a3b2");
    svg
      .append("g")
      .append("text")
      .attr("x", 75)
      .attr("y", 75)
      .text("(75,75)")
      .attr("dy", -5)
      .attr("font-size", 12);
    svg.append("circle").attr("cx", 75).attr("cy", 75).attr("r", 2);
  }, []);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const g = svg.selectAll("g");
    g.data(circleRadius)
      .enter()
      .append("circle")
      .style("stroke", "gray")
      .style("fill", "black")
      .attr("r", (value) => value) // r: 반지름
      .attr("cx", (value) => value * 3) // cx: 줌심점 x좌표값
      .attr("cy", (value) => value * 3); // cy: 중심점 y좌표값
  }, []);

  return (
    <>
      <h1>Circle</h1>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "300px",
            height: "200px",
            border: "1px solid black",
            marginRight: "8px",
          }}
        >
          <svg ref={initRef}></svg>
        </div>
        <div
          style={{ width: "300px", height: "200px", border: "1px solid black" }}
        >
          <svg ref={svgRef}></svg>
        </div>
      </div>
    </>
  );
};

export default Circle;
