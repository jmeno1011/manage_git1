import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <header>
        <h1>헤더</h1>
      </header>
      <section>
        <ul>
          <li>
            <Link to={"/about"}>about</Link>
          </li>
          <li>
            <Link to={"/carousel"}>carousel (슬라이더)✅</Link>
          </li>
          <li>
            <Link to={"/clip-board"}>clip-board (클립보드)✅</Link>
          </li>
          <li>
            <Link to={"/keyboard"}>keyboard (가상 키보드)</Link>
          </li>
          <li>
            <Link to={"/voca"}>voca (단어장)</Link>
          </li>
          <li>
            <Link to={"/d3"}>D3 연습</Link>
          </li>
          <li>
            <Link to={"/dev"}>Dev 확인</Link>
          </li>
          <li>
            <Link to={"/login"}>LoginForm 확인</Link>
          </li>
        </ul>
      </section>
      <footer>푸터</footer>
    </div>
  );
};

export default Home;
