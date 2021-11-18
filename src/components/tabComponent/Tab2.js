import React, { useEffect, useRef, useState } from "react";

const Tab2 = () => {
  const [searchTXT, setsearchTXT] = useState("");
  const inputRef = useRef([]);
  const divRef = useRef([]);
  const list = ["일번", "이번", "삼번", "사번", "일이번"];

  const onchangeTxtHandler = (e) => {
    setsearchTXT(e.target.value);
    for (let i = 0; i < divRef.current.length; i++) {
      if (e.target.value === "") {
        divRef.current[i].style.display = "";
      }else if(!inputRef.current[i].value.includes(e.target.value.toUpperCase())&& !inputRef.current[i].id.includes(e.target.value)){
        //   console.log(inputRef.current[i].id);
        divRef.current[i].style.display = "none";
      }else {
        divRef.current[i].style.display = "";
      }
    }
  };
//   const onSearch = (e) => {
//     e.preventDefault();
//     for (let i = 0; i < inputRef.current.length; i++) {
//       var txt = inputRef.current[i].value;
//       if (!txt.includes(searchTXT)) {
//         console.log("text : ", txt);
//         console.log("seartxt : ", searchTXT);
//         divRef.current[i].style.display = "none";
//       } else {
//         console.log("text : ", txt);
//         console.log("seartxt : ", searchTXT);
//         divRef.current[i].style.display = "";
//       }
//     }
//   };
  return (
    <>
      <h1>Tab2</h1>
      <p>second tab</p>
      <div>
        <input type="text" onChange={onchangeTxtHandler} value={searchTXT} />
        {/* <input type="button" onClick={onSearch} value="검색" /> */}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {list.map((value, index) => {
          return (
            <div key={index} ref={(el) => (divRef.current[index] = el)}>
              <label>
                <input
                  type="radio"
                  name="ep"
                  ref={(el) => (inputRef.current[index] = el)}
                  value={value}
                  id={index}
                />
                {index + 1}
              </label>
            </div>
          );
        })}
        {/* <label>
          <input type="radio" name="ep" ref={inputRef} value="일번" style={radioStyle}/>1
        </label>
        <label>
          <input type="radio" name="ep" ref={inputRef} value="이번" style={radioStyle}/>2
        </label>
        <label>
          <input type="radio" name="ep" ref={inputRef} value="삼번" style={radioStyle}/>3
        </label>
        <label>
          <input type="radio" name="ep" ref={inputRef} value="사번" style={radioStyle}/>4
        </label> */}
      </div>
    </>
  );
};

export default Tab2;
