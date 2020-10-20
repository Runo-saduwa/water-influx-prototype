import React, { Component, Fragment } from "react";
import { Provider } from "./Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddData from "./AddData";
import TableContainer from "./containers/TableContainer";
import Accordion from "./containers/Accordion";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Provider>
              <Accordion />
              <AddData />
              <TableContainer />
            </Provider>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
