import React from "react";
import $ from "jquery";

const Tab1 = () => {
  const onKeyHandle = (e) => {
    if (e.keyCode === 40) {
      console.log("아래");
    } else if (e.keyCode === 38) {
      console.log("위");
    }
    console.log(e.keyCode);
  };
  document.addEventListener("keydown", onKeyHandle);
  const onchangeHandle= (e)=>{
    console.log(e.target.value)
    console.log($('#ser').val());
  }

  return (
    <>
      <h1>Tab1</h1>
      <p>first tab</p>
      {/* <iframe width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMjY3YmIyZWUtNzIzNC00NWYxLTg4ZjItNGYzYjE1MTNjODAwIiwidCI6IjFhZTk1NGI0LWRkZWMtNGZhYS04YjhiLWE2ZGJjZWJmNDM5ZiJ9" frameBorder="0" allowFullScreen="true"></iframe> */}
      {/* <div style={{margin:' 10rem'}}> */}
      <div
        style={{
          width: "100%",
          height: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <div> */}
        <div
          style={{
            width: "200px",
            height: "100px",
            backgroundColor: "blue",
            position: "absolute",
            zIndex: "2",
          }}
        >
          blue
        </div>
        <div
          style={{
            width: "200px",
            height: "100px",
            backgroundColor: "red",
            position: "relative",
            zIndex: "1",
            top: "10px",
            left: "10px",
          }}
        >
          red
        </div>
      </div>
      <input
        type="search"
        placeholder="입력"
        style={{ fontSize: "large" }}
        onKeyPress={onKeyHandle}
      />
      <input type="search" name="city" list="cityname" id="ser" onChange={onchangeHandle}/>
      <datalist id="cityname"  >
        <option value="Boston"/>
        <option value="Cambridge" />
      </datalist>
    </>
  );
};

export default Tab1;
