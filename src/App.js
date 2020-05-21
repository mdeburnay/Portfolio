import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Summary from "./Summary.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Summary />
        </div>
      </Router>
    );
  }
}

export default App;
