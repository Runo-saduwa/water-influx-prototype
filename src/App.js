import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddData from './AddData';
import { Provider } from './Context';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
class App extends Component {
	render() {
		return (
			<Router>
				 <h1>WATER INFLUX COMPUTATION SOFTWARE</h1>
               <Switch>
			    <Provider>
					<Route exact path="/" component={AddData}/>
                 </Provider>
			   </Switch>
			</Router>
		);
	}
}

export default App;
