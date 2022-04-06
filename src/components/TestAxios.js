import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TestAxios = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [barData, setBarData] = useState([]);
  const showBarData = async () => {
    try {
      const response = await axios.get(
        "https://railway-node-express-production.up.railway.app/bar-chart"
      );
      console.log("barData::", response.data);
      setBarData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  const fetch = async () => {
    try {
      const response = await axios.get(
        "https://node-express-two.vercel.app/test-api"
      );
      console.log("vercel--test-api::", response.data);
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
        <button onClick={() => navigate("/")}>Go home</button>
      </header>
      <div style={{ padding: "1rem" }}>
        <h1>vercel :: test-api</h1>
        <h2>{data && data.status}</h2>
        <h2>{data && data.message}</h2>
        <hr />
        <button onClick={showBarData}>show barchart data</button>
        {barData.map((value) => (
          <div key={value.City}>
            <p>City :: {value.City}</p>
            <p>Population2010 :: {value.Population2010}</p>
            <p>Population2000 :: {value.Population2000}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TestAxios;
