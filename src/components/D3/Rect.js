import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Rect = () => {
  const svgRef = useRef();
  const rectData = [10, 20, 30, 40, 50];
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg
      .attr("viewBox", [0, 0, 200, 200])
      .attr("width", "300px")
      .attr("height", "200px");

    svg
      .append("rect")
      .attr("x", 10)
      .attr("y", 80)
      .attr("width", 100)
      .attr("height", 40)
      .attr("stroke", "black")
      .attr("fill", "#69a3b2");
  }, []);
  return (
    <>
      <h1>Rect</h1>
      <div
        style={{ width: "300px", height: "200px", border: "1px solid black" }}
      >
        <svg ref={svgRef}></svg>
      </div>
    </>
  );
};

export default Rect;
