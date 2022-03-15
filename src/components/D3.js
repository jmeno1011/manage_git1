import React from "react";
import { useNavigate } from "react-router-dom";
import Bar from "./D3/Bar";

const D3 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <h1>D3</h1>
        <button onClick={() => navigate(-1)}>Go back</button>
      </header>
      <Bar />
    </div>
  );
};

export default D3;
