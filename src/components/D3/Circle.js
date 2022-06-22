import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const circleRadius = [5, 10, 15, 20, 25];

const Circle = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    svg
      //   .attr("width", width)
      //   .attr("height", height)
      .style("border", "1px solid black");
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
      <svg ref={svgRef}></svg>
    </>
  );
};

export default Circle;
