import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Main from "./Pages/Main.js";
import NotFound from "./Pages/NotFound/NotFound.js";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/not-found" component={NotFound} />
        </Switch>
      </div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Heebo&family=Varela+Round&display=swap');
      </style>
    </Router>
  );
}
