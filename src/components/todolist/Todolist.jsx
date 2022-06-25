import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Todolist = () => {
  const [todos, setTodos] = useState(data);
  return (
    <Layout>
      <ListBox>
        <TodoHeader />
        <TodolistAdd />
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
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
  /* height: 500px; */
  padding: 12px 16px;
  border-radius: 6px;
  box-shadow: 1px 3px 13px 7px rgb(0 0 0 / 30%);
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: brightness(1.1);
  color: #308bd9;
  font-family: "Montserrat", sans-serif;
`;

const TodoHeader = () => {
  const [now, setNow] = useState(new Date());

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
  margin-bottom: 32px;
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
      <Icon icon="dashicons:plus-alt2" />
      {/* <Icon icon="emojione-monotone:heavy-plus-sign" /> */}
      {/* <div>Add New</div> */}
      <input type={"text"} placeholder="Add New" />
    </Adder>
  );
};

const Adder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* background-color: rgba(56, 108, 221, 20%); */
  background-color: rgba(48, 139, 217, 20%);
  opacity: 0.8;
  color: rgba(255, 255, 255, 0.8);
  padding: 2px 7px;
  svg {
    height: 30px;
    width: 30px;
    margin-right: 16px;
    cursor: pointer;
  }
  h2 {
    font-size: 30px;
  }
  div {
    font-size: 18px;
  }
  input {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 18px;
    color: #308bd9;
  }
  input::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  margin-bottom: 32px;
`;
const data = [
  {
    id: 1,
    text: "Study HTTP book",
    checked: false,
  },
  {
    id: 2,
    text: "Study todo list",
    checked: true,
  },
];
const TodoItem = (props) => {
  const { text, checked } = props.todo;
  const [chked, setChked] = useState(false);

  return (
    <Item>
      <div onClick={() => setChked(!chked)}>
        {checked ? (
          <Icon icon="carbon:checkbox-checked" />
        ) : (
          <Icon icon="carbon:checkbox" />
        )}
      </div>
      <label>{text}</label>
      <Icon icon="bi:trash" />
    </Item>
  );
};
const Item = styled.div`
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255, 0.5);
  position: relative;
  div {
    height: 30px;
    width: 30px;
    background-color: rgb(128, 128, 128, 0.3);
    margin-right: 32px;
    position: relative;
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
  label {
    font-size: 18px;
    user-select: none;
  }
  > svg {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 16px;
    cursor: pointer;
  }
`;
