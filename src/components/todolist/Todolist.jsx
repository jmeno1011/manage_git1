import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Todolist = () => {
  return (
    <Layout>
      {/* <h1 style={{ marginBottom: "16px" }}>Todolist</h1> */}
      <ListBox>
        <TodoHeader />
        <TodolistAdd />
      </ListBox>
    </Layout>
  );
};

export default Todolist;

const Layout = styled.div`
  min-height: calc(100vh - 80px);
  background: linear-gradient(#8cbad3, #e9e9e9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListBox = styled.div`
  width: 400px;
  height: 500px;
  padding: 12px 16px;
  border-radius: 6px;
  box-shadow: 1px 3px 13px 7px rgb(0 0 0 / 30%);
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: brightness(1.1);
  color: #386cdd;
  font-family: "Montserrat", sans-serif;
`;

const TodoHeader = () => {
  const [now, setNow] = useState(new Date());
  //   const now = new Date();
  console.log(now);
  const WEEKDAY = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const FULL_MONTH = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const SHORT_MONTH = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <Header>
      <Icon icon="charm:menu-hamburger" />
      <h2>{WEEKDAY[now.getDay()]}</h2>
      <h3>
        {FULL_MONTH[now.getMonth() + 1]} {now.getDate()},{now.getFullYear()}
      </h3>
    </Header>
  );
};

const Header = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 24px;
  }
  h2 {
    margin-top: 10px;
    font-weight: 500;
    letter-spacing: 1.5px;
    font-size: 36px;
  }
  h3 {
    margin-top: 4px;
    font-weight: 500;
    color: rgb(56, 108, 221, 0.7);
    font-size: 16px;
  }
`;

const TodolistAdd = () => {
  return (
    <Adder>
      <Icon icon="carbon:add" />
      <div>Add New</div>
    </Adder>
  );
};

const Adder = styled.div`
  width: 100%;
  display: flex;
`;
