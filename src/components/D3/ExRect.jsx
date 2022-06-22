import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
const ExRect = () => {
  const svgRef = useRef();
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.attr("viewBox", [0, 0, 200, 200]);
    svg
      .append("rect")
      .attr("x", 10)
      .attr("y", 100)
      .attr("width", 100)
      .attr("height", 40);
  }, []);
  return (
    <>
      <div>Rect</div>
      <div
        style={{ width: "300px", height: "200px", border: "1px solid black" }}
      >
        <svg ref={svgRef}></svg>
      </div>
    </>
  );
};

export default ExRect;
