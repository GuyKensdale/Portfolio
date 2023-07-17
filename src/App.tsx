import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./App.css";

import HomePage from "./homePage";
import TechSkills from "./techSkills";
import Projects from "./projects";
import AboutMe from "./aboutMe";
const App = () => {
  return (
    <div className="container">
      <HomePage />
      <TechSkills />
      <Projects />
      <AboutMe />
    </div>
  );
};

export default App;
