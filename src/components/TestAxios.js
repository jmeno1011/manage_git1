import axios from "axios";
import React, { useEffect, useState } from "react";

const TestAxios = () => {
  const [data, setData] = useState();
    const fetch = async () => {
      try {
        const response = await axios.get("https://node-express-two.vercel.app/test-api");
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
    <div>
      <h1>TestAxios</h1>
      {/* <h4>hamdsum : {data.pre_hamdsum}</h4>
      {data.pre_hamd.map((value, index) => (
        <h4 key={index}>
          {index + 1} : {value}
        </h4>
      ))} */}
    </div>
  );
};

export default TestAxios;
