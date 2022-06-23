import React from "react";
import Bar from "./D3/Bar";
import styled from "styled-components";
import Circle from "./D3/Circle";
import Rect from "./D3/Rect";

const D3 = () => {
  return (
    <Layout>
      <Bar />
      <Circle />
      <Rect />
    </Layout>
  );
};

export default D3;

const Layout = styled.div`
  min-height: calc(100vh - 80px);
  padding: 16px;
`;
