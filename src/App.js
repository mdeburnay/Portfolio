import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Main from "./Pages/Main.js";
import NotFound from "./Pages/NotFound/NotFound.js";
import Kodflix from "./Pages/Projects/Kodflix/Kodflix.js";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/not-found" component={NotFound} />
          <Route exact path="/projects/kodflix" component={Kodflix} />
        </Switch>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        ></link>
      </div>
    </Router>
  );
}
