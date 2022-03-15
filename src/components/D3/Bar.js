import React, { useRef, useEffect, useState } from "react";
import { select } from "d3";
import { scaleBand } from "d3";
import { scaleLinear } from "d3";
import { axisBottom } from "d3";
import { axisLeft } from "d3";
// https://darrengwon.tistory.com/1140?category=942624
// 위 블로그에서 참고중
const Bar = () => {
  const [data, setData] = useState([24, 30, 45, 70, 26]);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current); // selection 객체

    // scale
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, 300])
      .padding(0.5);
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
      <div style={{ padding: 50 }}>
        <svg ref={svgRef} style={{ margin: 5 }}>
          <g className="y-axis" />
          <g className="x-axis" />
        </svg>
      </div>
    </>
  );
};

export default Bar;
