import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <div className="App">
      <Header>
        <h1>헤더</h1>
        <Menu>
          <ul>
            <li>
              <Link to={"/about"}>about✅</Link>
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
            {/* <li>
              <Link to={"/dev"}>Dev 확인</Link>
            </li>
            <li>
              <Link to={"/login"}>LoginForm 확인</Link>
            </li> */}
            <li>
              <Link to={"/todolist"}>투두 리스트</Link>
            </li>
            <li>
              <Link to={"/google-chart"}>구글 차트</Link>
            </li>
            <li>
              <Link to={"/mui"}>MUI</Link>
            </li>
          </ul>
        </Menu>
      </Header>
      <Layout>
        <Outlet />
      </Layout>
      <footer>푸터</footer>
    </div>
  );
};

export default Home;

const Header = styled.header`
  min-height: 80px;
  height: fit-content;
  width: 100%;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  background: darkolivegreen;
  color: white;
  h1 {
    min-width: 70px;
  }
`;

const Menu = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    margin: 4px;
    padding: 2px 6px;
    border: 1px solid white;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

const Layout = styled.div`
  padding: 16px;
`;
