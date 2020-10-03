import React, { useEffect, useState, useLayoutEffect } from "react";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <HomePage />
      <AboutMe />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
