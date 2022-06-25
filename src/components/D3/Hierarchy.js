import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import * as d3 from "d3";
import "./styles.css";

export default function App() {
  const svgRef = useRef();
  const dx = 12;
  const dy = 120;
  const width = 650;
  const tree = d3.tree().nodeSize([dx, dy]);

  const treeLink = d3
    .linkHorizontal()
    .x((d) => d.y)
    .y((d) => d.x);

  const label = (d) => d.data.name;
  const highlight = () => false;
  const marginLeft = 40;

  const [data, setData] = useState({});
  const [depreType, setDepreType] = useState([]);
  const [depreLevel, setDepreLevel] = useState([]);
  const [depreStg, setDepreStg] = useState([]);

  const selectPeriod = (period) => {
    setDepreType(initailData.filter((el) => el.name === period)[0].children);
    // setData((data) => {
    //   return { name: period };
    // });
  };

  const [bdisum, setBdisum] = useState(0);
  const [level, setLevel] = useState(0);
  const getLevel = () => {
    // let level;
    if (bdisum <= 13) {
      // level = 1;
      setLevel(1);
    } else if (bdisum > 13 && bdisum <= 19) {
      // level = 1;
      setLevel(1);
    } else if (bdisum > 19 && bdisum <= 28) {
      // level = 2;
      setLevel(2);
    } else {
      // level = 3;
      setLevel(3);
    }
    // setDepreLevel(depreType.filter((el) => el.level === level)[0].children);
  };
  // const setType = (period) => {
  //   setDepreType(data.filter((el) => el.name === period)[0].children);
  // };
  const dataset = (e) => {
    console.log(e.target.dataset.type);
    const root = e.target.dataset.type;
    setData((data) => {
      return { name: root };
    });
    setDepreLevel(
      depreType
        .filter((el) => el.name === root)[0]
        .children.filter((item) => item.level === level)
    );
    // const child = e.target.dataset.type;
    // if (data.children == null) {
    //   setData((data) => {
    //     return { ...data, children: [{ name: child }] };
    //   });
    // } else {
    //   if (data.children.filter((el) => el.name === child).length === 0) {
    //     setData((data) => {
    //       return { ...data, children: [...data.children, { name: child }] };
    //     });
    //   }
    // }
  };

  const setDiseaseLevel = (e) => {
    const child = e.target.dataset.type;
    if (data.children == null) {
      setData((data) => {
        return { ...data, children: [{ name: child }] };
      });
    } else {
      if (data.children.filter((el) => el.name === child).length === 0) {
        setData((data) => {
          return { ...data, children: [...data.children, { name: child }] };
        });
      }
    }
    console.log("epreLevel::", depreLevel);
    setDepreStg(depreLevel[0].children);
  };

  const setStrategies = (e) => {
    console.log("setStrategies:", data);
    const child = e.target.dataset.type;
    setData((data) => {
      return {
        ...data,
        children: [
          { name: data.children[0].name, children: [{ name: child }] },
        ],
      };
    });
  };

  console.log("depreType:", depreType);
  console.log("depreLevel:", depreLevel);
  console.log("data::", data);

  useEffect(() => {
    let x0 = Infinity;
    let x1 = -x0;
    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", [0, 0, width, dx * 2 + 40])
      .style("overflow", "visible");

    const area = svg
      .append("g")
      .selectAll("rect")
      .data(category)
      .join("rect")
      .attr("transform", (d, i) => `translate(${i * 130},0)`)
      .attr("height", 244)
      .attr("width", 130)
      .attr("fill", (d, i) => (i % 2 === 0 ? "#F5F5F5" : "#BDBDBD"));

    const back = svg
      .append("g")
      .selectAll("rect")
      .data(category)
      .join("rect")
      .attr("transform", (d, i) => `translate(${i * 130},0)`)
      .attr("height", 20)
      .attr("width", 130)
      .attr("fill", "#ffd24c");

    const title = svg
      .append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .attr("font-weight", "600")
      .style("text-anchor", "middle")
      .selectAll("text")
      .data(category)
      .join("text")
      .attr("x", (d, i) => i * 130 + 65)
      .attr("y", 10)
      .attr("dy", "0.35rem")
      .text((d) => d);
    if (data.name != null) {
      const root = tree(d3.hierarchy(data));
      root.each((d) => {
        if (d.x > x1) x1 = d.x;
        if (d.x < x0) x0 = d.x;
      });

      // const svg = d3
      //   .select(svgRef.current)
      //   .attr("viewBox", [0, 0, width, x1 - x0 + dx * 2 + 40])
      //   .style("overflow", "visible");

      // const area = svg
      //   .append("g")
      //   .selectAll("rect")
      //   .data(category)
      //   .join("rect")
      //   .attr("transform", (d, i) => `translate(${i * 130},0)`)
      //   .attr("height", 244)
      //   .attr("width", 130)
      //   .attr("fill", (d, i) => (i % 2 === 0 ? "#F5F5F5" : "#BDBDBD"));

      // const back = svg
      //   .append("g")
      //   .selectAll("rect")
      //   .data(category)
      //   .join("rect")
      //   .attr("transform", (d, i) => `translate(${i * 130},0)`)
      //   .attr("height", 20)
      //   .attr("width", 130)
      //   .attr("fill", "#ffd24c");

      // const title = svg
      //   .append("g")
      //   .attr("font-family", "sans-serif")
      //   .attr("font-size", 12)
      //   .attr("font-weight", "600")
      //   .style("text-anchor", "middle")
      //   .selectAll("text")
      //   .data(category)
      //   .join("text")
      //   .attr("x", (d, i) => i * 130 + 65)
      //   .attr("y", 10)
      //   .attr("dy", "0.35rem")
      //   .text((d) => d);

      const g = svg
        .append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", "0.68em")
        .attr("transform", `translate(${marginLeft + 40}, ${dx - x0 + 40})`);

      const link = g
        .append("g")
        .attr("fill", "none")
        // .attr("stroke", "#555")
        .attr("stroke", "#ffd24c")
        // .attr("stroke", "black")
        // .attr("stroke-opacity", 0.4)
        .attr("stroke-width", 1.5)
        .selectAll("path")
        .data(root.links())
        .join("path")
        .attr("stroke", (d) =>
          highlight(d.source) && highlight(d.target) ? "red" : null
        )
        .attr("stroke-opacity", (d) =>
          highlight(d.source) && highlight(d.target) ? 1 : null
        )
        .attr("d", treeLink);

      const node = g
        .append("g")
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", 3)
        .selectAll("g")
        //   .selectAll("rect")
        .data(root.descendants())
        .join("g")
        .attr("transform", (d) => `translate(${d.y},${d.x})`)
        .style("margin-bottom", "4px");

      node
        .append("circle")
        .attr("fill", (d) =>
          highlight(d) ? "red" : d.children ? "#555" : "#999"
        )
        .attr("fill", "#ffd24c")
        .attr("r", 2.5);

      const text = node
        .append("text")
        .attr("fill", (d) => (highlight(d) ? "red" : null))
        .attr("stroke", "white")
        .attr("paint-order", "stroke")
        .attr("dy", "-0.31em")
        .attr("x", (d) => (d.children ? -6 : 6))
        // .attr("text-anchor", (d) => (d.children ? "end" : "start"))
        .attr("text-anchor", "middle");

      text
        .append("tspan")
        .attr("dy", (d) => (d.data.name.split(" ").length > 1 ? "" : "0.32em"))
        .text((d) => d.data.name.split(" ")[0]);

      text
        .append("tspan")
        .attr("dy", "1.32em ")
        .text((d) => d.data.name.split(" ")[1])
        .attr("x", (d) => (d.children ? -6 : 6));
    }
  }, [data]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <hr />

      <div
        style={{
          padding: "16px 0",
          paddingRight: 16,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ width: "calc(80% - 16px)", marginRight: "16px" }}>
          <svg ref={svgRef}></svg>
        </div>
        <div style={{ minWidth: 300, width: "20%" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title>지속 시기</Title>
            {initailData.map((periods) => (
              <div
                key={periods.id}
                style={{ marginRight: "8px" }}
                onClick={() => selectPeriod(periods.name)}
                data-period={periods.name}
              >
                <input type="radio" name="period" id={periods.name} />
                <label htmlFor={periods.name}>{periods.name}</label>
              </div>
            ))}
          </div>
          <hr />
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title>BDI 점수</Title>
            <input
              type="number"
              style={{ width: "60px", marginRight: "8px" }}
              onChange={(e) => setBdisum(e.target.value)}
              value={bdisum}
            />
            <button onClick={getLevel}>입력</button>
          </div>
          <hr />
          {/* <div style={{ display: "flex" }}>
            <Title style={{width:'60px'}}>연령</Title>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {ages.map((value) => (
                <div
                  key={value.id}
                  style={{ marginRight: "4px", marginBottom: "4px" }}
                >
                  <input type="radio" name="ages" id={value.id} />
                  <label htmlFor={value.id}>{value.text}</label>
                </div>
              ))}
            </div>
          </div>
          <hr /> */}
          {depreType.length !== 0 ? (
            <>
              <Title>{depreType[0].parent}</Title>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {depreType.map((value) => (
                  <Button
                    key={value.id}
                    data-type={value.name}
                    onClick={dataset}
                  >
                    {value.name}
                  </Button>
                ))}
              </div>
              <hr />
            </>
          ) : (
            ""
          )}

          {depreLevel.length !== 0 ? (
            <>
              <Title>{depreLevel[0].parent}</Title>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {depreLevel.map((value) => (
                  <Button
                    key={value.id}
                    data-type={value.name}
                    onClick={setDiseaseLevel}
                  >
                    {value.name}
                  </Button>
                ))}
              </div>
              <hr />
            </>
          ) : (
            ""
          )}
          {depreStg.length !== 0 ? (
            <>
              <Title>{depreStg[0].parent}</Title>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {depreStg.map((value) => (
                  <Button
                    key={value.id}
                    data-type={value.name}
                    onClick={setStrategies}
                  >
                    {value.name}
                  </Button>
                ))}
              </div>
              <hr />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

const category = [
  "Depression Type",
  "Disease Level",
  "Treatment Strategies",
  "Treatment Priority",
  "Drugs",
];

const ages = [
  { id: "children", text: "13세 이하" },
  { id: "adolescence", text: "14 ~ 19세" },
  { id: "adult", text: "20 ~ 64세" },
  { id: "geriatric", text: "65세 이상" },
];

const initailData = [
  {
    id: "p1",
    name: "2년 이상",
    children: [
      {
        id: "p1-t1",
        parent: "주요우울장애",
        name: "소아 주요우울장애",
        children: [
          {
            id: "t1-l1",
            parent: "소아 주요우울장애",
            name: "소아 경도_및_중등도",
            level: 1,
            children: [
              {
                id: "l1-s1",
                parent: "소아 경도_및_중등도",
                name: "소아 경도_1차_치료",
                children: [],
              },
            ],
          },
          {
            id: "t1-l2",
            parent: "소아 주요우울장애",
            name: "소아 정신병_미동반_중증",
            level: 2,
            children: [
              {
                id: "l2-s2",
                parent: "소아 정신병_미동반_중증",
                name: "소아 정신병_미동반_1차_치료",
              },
            ],
          },
          {
            id: "t1-l3",
            parent: "소아 주요우울장애",
            name: "소아 정신병_동반_중증",
            level: 3,
            children: [
              {
                id: "l3-s3",
                parent: "소아 정신병_동반_중증",
                name: "소아 정신병_동반_1차_치료",
              },
            ],
          },
        ],
      },
      {
        id: "p1-t2",
        parent: "주요우울장애",
        name: "청소년 주요우울장애",
        children: [
          {
            id: "t2-l1",
            parent: "청소년 주요우울장애",
            name: "청소년 경도_및_중등도",
            level: 1,
            children: [
              {
                id: "l1-s1",
                parent: "청소년 경도_및_중등도",
                name: "청소년 경도_1차_치료",
              },
            ],
          },
          {
            id: "t2-l2",
            parent: "청소년 주요우울장애",
            name: "청소년 정신병_미동반_중증",
            level: 2,
            children: [
              {
                id: "l2-s2",
                parent: "청소년 정신병_미동반_중증",
                name: "청소년 정신병_미동반_1차_치료",
              },
            ],
          },
          {
            id: "t2-l3",
            parent: "청소년 주요우울장애",
            name: "청소년 정신변_동반_중증",
            level: 3,
            children: [
              {
                id: "l3-s3",
                parent: "청소년 정신변_동반_중증",
                name: "청소년 정신병_동반_1차_치료",
              },
            ],
          },
        ],
      },
      {
        id: "p1-t3",
        parent: "주요우울장애",
        name: "노인 주요우울장애",
        children: [
          {
            id: "t3-l1",
            parent: "노인 주요우울장애",
            name: "노인 경도_및_중등도",
            level: 1,
            children: [
              {
                id: "l1-s1",
                parent: "노인 경도_및_중등도",
                name: "노인 경도_1차_치료",
              },
            ],
          },
          {
            id: "t3-l2",
            parent: "노인 주요우울장애",
            name: "노인 정신병_미동반_중증",
            level: 2,
            children: [
              {
                id: "l2-s2",
                parent: "노인 정신병_미동반_중증",
                name: "노인 정신병_미동반_1차_치료",
              },
            ],
          },
          {
            id: "t3-l3",
            parent: "노인 주요우울장애",
            name: "노인 정신변_동반_중증",
            level: 3,
            children: [
              {
                id: "l3-s3",
                parent: "노인 정신변_동반_중증",
                name: "노인 정신병_동반_1차_치료",
              },
            ],
          },
        ],
      },
      { id: "p1-t4", parent: "주요우울장애", name: "불안형 주요우울장애" },
      { id: "p1-t5", parent: "주요우울장애", name: "멜랑꼴리아 주요우울장애" },
      { id: "p1-t6", parent: "주요우울장애", name: "비전형적 주요우울장애" },
      { id: "p1-t7", parent: "주요우울장애", name: "혼합형 주요우울장애" },
    ],
  },
  {
    id: "p2",
    name: "2주 이상",
    children: [
      {
        id: "p2-t1",
        parent: "지속성 우울장애",
        name: "지속성 우울장애",
      },
    ],
  },
];

const Button = styled.div`
  width: fit-content;
  padding: 1px 6px;
  margin: 4px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  font-size: 0.85rem;
  border-radius: 8px;
  cursor: default;
  background-color: #eeeeee;
  &:hover {
    background-color: #e6e6e6;
  }
  &:active {
    background-color: white;
  }
`;

const Title = styled.h3`
  margin: 8px 8px 8px 0;
`;
