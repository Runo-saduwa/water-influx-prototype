import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import AddData from './AddData';
import { Provider } from './Context';
let constant = 4051.52;
class App extends Component {
	// componentDidMount() {
	// 	const { time, initPressure, dimTime } = this.state.formValues;
	// 	let pressures = [ initPressure ];
	// 	if (time === 0) {
	// 		this.setState({
	// 			results: [
	// 				{
	// 					meanPressure: 0,
	// 					waterInflux: 0,
	// 					cumWaterInflux: 0
	// 				}
	// 			],
	// 			firstPressure: initPressure,
	// 			pressures: pressures
	// 		});
	// 	} else if (time > 0 && this.state.pressures.length > 1 && this.state.pressures.length <= 3) {
	// 		// console.log(this.state.pressures)

	// 		let meanPressure = (this.state.firstPressure - initPressure) / 2;
	// 		let pressures = [ ...this.state.pressures ];
	// 		this.setState({ pressures: pressures.push(initPressure) });
	// 		let halfCalc = constant * meanPressure;
	// 		let halfCalculated = [ ...this.state.halfCalculated ];
	// 		halfCalculated.push(halfCalc);
	// 		let dimTimes = [ ...this.state.dimTimes ];
	// 		dimTimes.push(this.state.formValues.dimTime);
	// 		//console.log(dimTimes)
	// 	}
	// }

	// onChange = (e) => {
	// 	this.setState({
	// 		formValues:{
	// 			[e.target.name]: parseFloat(e.target.value)
	// 		}
	// 	})

	//console.log(this.state.formValues.time)
	//	}

	// submitHandler = (formValues) => {
	// 	//e.preventDefault();
	// 	//event.preventDefault();
	//    console.log(formValues.time, formValues.dimTime)
	// }

	render() {
		return (
			<Provider>
				<Fragment>
					<h1>Hello app</h1>
					<AddData />
				</Fragment>
			</Provider>
		);
	}
}

export default App;
