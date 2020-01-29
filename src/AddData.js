import React, { Component } from 'react';
import { Consumer } from './Context';
import {Line} from 'react-chartjs-2';


class AddData extends Component {
	state = {
		time: '',
		initPressure: '',
		dimTime: ''
	};



	onChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		});
	};

	render() {
		let { time, initPressure, dimTime } = this.state;
		const data = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
			  {
				label: 'My First dataset',
				fill: false,
				lineTension: 0.1,
				backgroundColor: 'rgba(75,192,192,0.4)',
				borderColor: 'rgba(75,192,192,1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#333',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [65, 59, 80, 81, 56, 55, 40]
			  }
			]
		  };
		
		return (
			<Consumer>
				{(value) => {
					let { onSubmitHandler, results } = value;
					let labels = results.map(label => label.time);
					data.labels = labels;
					console.log(labels);
					let yAxis = results.map(label => label.cumWaterInflux);
					data.datasets[0].data = yAxis;
					console.log(yAxis);
					
					return (
						<div>
							<form onSubmit={onSubmitHandler.bind(this, parseFloat(time), parseFloat(initPressure), parseFloat(dimTime))}>
							<div className="form-group">
								<label htmlFor="time">Time:</label>
								<input
									type="number"
									className="form-control"
									name="time"
									value={time}
									onChange={this.onChange}
									placeholder="Please fill in the time"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="course">initial Pressure:</label>
								<input
									type="number"
									className="form-control"
									name="initPressure"
									value={initPressure}
									onChange={this.onChange}
									placeholder="fill in initial Pressure"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="course">Dimentionless time:</label>
								<input
									type="text"
									className="form-control"
									name="dimTime"
									value={dimTime}
									onChange={this.onChange}
									placeholder="fill it"
								/>
							</div>
							<input type="submit" className="btn btn-success btn-lg btn-block" />
						</form>

						<section>
							<button>view chart</button>
							<div>
							<Line data={data} />
							</div>
						</section>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default AddData;
