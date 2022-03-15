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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/carousel" element={<CarouselBasic />} />
      <Route path="/clip-board" element={<ClipBoard />} />
      <Route path="/keyboard" element={<Keyboard />} />
      <Route path="/voca" element={<VocaListItem />} />
      <Route path="/d3" element={<D3 />} />
    </Routes>
  );
}

export default App;
