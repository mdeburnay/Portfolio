import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Homepage />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </Router>
    );
  }
}

export default App;
