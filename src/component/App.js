import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Project from "./Project";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/project">
            <Project />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
