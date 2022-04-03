import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const TestAxios = () => {
  const [data, setData] = useState();
  const fetch = async () => {
    try {
      const response = await axios.get(
        "https://node-express-two.vercel.app/test-api"
      );
      console.log(response.data);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <header>
        <h1>DevConfirm</h1>
        <button onClick={() => Navigate("/")}>Go home</button>
      </header>
      <div style={{ padding: "1rem" }}>
        <h2>{data.status}</h2>
        <h2>{data.message}</h2>
        {/* <h4>hamdsum : {data.pre_hamdsum}</h4>
      {data.pre_hamd.map((value, index) => (
        <h4 key={index}>
          {index + 1} : {value}
        </h4>
      ))} */}
      </div>
    </>
  );
};

export default TestAxios;
