import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Rect = () => {
  const svgRef = useRef();
  const rectData = [10, 20, 30, 40, 50];
  useEffect(() => {
    const svg = d3.select(svgRef);
    // svg.append("g").selectAll("rect").data(rectData).enter().append("rect");
  }, []);
  return (
    <>
      <h3>Rect</h3>
      <svg ref={svgRef}></svg>
    </>
  );
};

export default Rect;
