import React, { useRef } from "react";

const Rect = () => {
  const svgRef = useRef();
  return (
    <>
      <h3>Rect</h3>
      <svg ref={svgRef}></svg>
    </>
  );
};

export default Rect;
