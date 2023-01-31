import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="app-content">
          <Switch>
            <Route exact path={"/"}>
              <Home/>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
