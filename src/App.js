import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Navbar from "./Components/Navbar";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Homepage />
        <Skills />
        <Projects />
      </div>
    </Router>
  );
}
