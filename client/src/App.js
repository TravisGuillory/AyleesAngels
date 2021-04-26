import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {About} from "./pages/About/About";
import {Contact} from "./pages/Contact/Contact";

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route exact path = "/about"> 
          <About/>
        </Route>
        <Route exact path = "/contact" >
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
