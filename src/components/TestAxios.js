import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TestAxios = () => {
  const navigate = useNavigate();
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
        <button onClick={() => navigate("/")}>Go home</button>
      </header>
      <div style={{ padding: "1rem" }}>
        <h1>vercel :: test-api</h1>
        <h2>{data && data.status}</h2>
        <h2>{data && data.message}</h2>
        <hr />
      </div>
    </>
  );
};

export default TestAxios;
