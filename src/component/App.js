import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Project from "./Project";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createContext } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <Header />
          <div className="switch">
            <ReactSwitch
              className="tbtn"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
            <label className="lable">
              {theme === "light" ? "Light Mode" : "Dark Mode"}
            </label>
          </div>
          <Switch>
            <Route path="/project">
              <Project />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
