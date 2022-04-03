import React from "react";
import { Link, Navigate } from "react-router-dom";

const DevConfirm = () => {
  return (
    <>
      <header>
        <h1>DevConfirm</h1>
        <button onClick={() => Navigate("/")}>Go home</button>
      </header>
      <li>
        <Link to={"/axios"}>test axios</Link>
      </li>
    </>
  );
};

export default DevConfirm;
