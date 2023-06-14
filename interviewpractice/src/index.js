import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";

import Home from "./home";

const routing = (
  <Router>
    <div>
      <switch>
        <Route exact path="/" component={Home} />
      </switch>
    </div>
  </Router>
);

ReactDOM.render(routing,document.getElementById("root"))
  
