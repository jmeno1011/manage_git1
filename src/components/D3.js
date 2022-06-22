import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Bar from "./D3/Bar";
import styled from "styled-components";
import Circle from "./D3/Circle";
import Rect from "./D3/Rect";

const D3 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header style={{ display: "flex" }}>
        <Title>D3</Title>
        <Title onClick={() => navigate("/")}>
          <Icon icon="emojione-monotone:back-arrow" />
        </Title>
      </header>
      <Layout>
        <Bar />
        <Circle />
        <Rect />
      </Layout>
    </div>
  );
};

export default D3;

const Title = styled.h1`
  margin: auto 16px;
  svg {
    cursor: pointer;
  }
  svg:hover {
    color: red;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    height: 100%;
  }
  li {
    margin: auto 8px;
  }
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: red;
  }
`;

const Layout = styled.div`
  min-height: calc(100vh - 80px);
  padding: 16px;
`;
