import React from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";

class Home extends React.Component {
//   constructor() {
//     super();
//   }
  render() {
    return (
      <body>
        <div className="heading">
          <div className="jumbotron text-center" id="heading">
            <h1 className="myname">Mohammed Naveed</h1>
            <p className="myoccupation">Web Developer</p>
          </div>
        </div>
      </body>
    );
  }
}
export default Home
