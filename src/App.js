import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import CarouselBasic from "./components/CarouselBasic";
import ClipBoard from "./components/ClipBoard";
import Keyboard from "./components/Keyboard";
import VocaListItem from "./components/VocaListItem";
import D3 from "./components/D3";
import TestAxios from "./components/TestAxios";
import DevConfirm from "./components/DevConfirm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/carousel" element={<CarouselBasic />} />
      <Route path="/clip-board" element={<ClipBoard />} />
      <Route path="/keyboard" element={<Keyboard />} />
      <Route path="/voca" element={<VocaListItem />} />
      <Route path="/d3" element={<D3 />}>
        <Route path="bar" element={<Bar />} />
        <Route path="circle" element={<Circle />} />
      </Route>
      <Route path="/axios" element={<TestAxios />} />
      <Route path="/dev" element={<DevConfirm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
