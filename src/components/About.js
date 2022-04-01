import React from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <h1>About</h1>
        <button onClick={() => navigate("/")}>Go home</button>
      </header>
      <li>
        <Link to={"/axios"}>test axios</Link>
      </li>
    </>
  );
};

export default About;
