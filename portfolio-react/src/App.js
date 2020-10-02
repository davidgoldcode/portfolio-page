import React, { useEffect, useState, useLayoutEffect } from "react";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  return (
    <>
      <HomePage />
      <AboutMe />
      {/* <Portfolio /> */}
    </>
  );
}

export default App;
