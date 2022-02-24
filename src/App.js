import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import CarouselBasic from "./components/CarouselBasic";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/carousel" element={<CarouselBasic />} />
    </Routes>
  );
}

export default App;
