import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");
  const [logged, setLogged] = useState([]);
  const onSubmitHandle = (e) => {
    const data = {
      user_id: id,
      user_pw: pw,
    };
    e.preventDefault();
    axios({
      method: "post",
      url: "/login",
      //   url: "http://localhost:8000/login",
      data: data,
    })
      .then((res) => {
        const accessToken = res.data.accessToken;
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer::${accessToken}`;
        console.log("login result :: ", res.data);
      })
      .catch((error) => {
        console.log("error:: ", error);
      });
  };
  const callLogged = (e) => {
    e.preventDefault();
    axios({
      method: "get",
      url: "/api",
      //   url: "http://localhost:8000/logged",
      //   url: "http://localhost:8000/login",
    }).then((res) => {
      console.log(`logged::result:: ${res.data}`);
      setLogged(res.data);
    });
  };
  return (
    <>
      <header>
        <h1>LoginForm</h1>
        <button onClick={() => navigate("/")}>Go home</button>
      </header>
      <div style={{ padding: "1rem" }}>
        <form onSubmit={onSubmitHandle}>
          <label htmlFor="id">
            ID :{" "}
            <input
              type={"text"}
              required
              id="id"
              value={id}
              onChange={(e) => setID(e.target.value)}
            />
          </label>
          <label htmlFor="pw">
            PW :{" "}
            <input
              type={"password"}
              required
              id="pw"
              value={pw}
              onChange={(e) => setPW(e.target.value)}
            />
          </label>
          <button>로그인</button>
        </form>
        <hr />
        <h2>logged 결과</h2>
        <input
          value={"logged 결과 불러오기"}
          type={"button"}
          onClick={callLogged}
        />
        {logged && logged.map((value, index) => <p key={index}>{value}</p>)}
      </div>
    </>
  );
};

export default LoginForm;
