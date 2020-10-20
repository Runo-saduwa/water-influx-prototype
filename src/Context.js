import React, { Component } from "react";
const constant = 4051.52;
export const Context = React.createContext();

export class Provider extends Component {
  state = {
    firstPressure: null,
    pressures: [],
    halfCalculated: [],
    dimTimes: [],
    results: [],
  };

  onSubmitHandler = (time, initPressure, dimTime, e) => {
    e.preventDefault();
    let pressures = [...this.state.pressures];
    pressures.push(initPressure);
    this.setState({
      pressures,
    });

    if (time === 0) {
      this.setState({
        results: [
          ...this.state.results,
          {
            time,
            initPressure,
            dimTime,
            meanPressure: 0,
            waterInflux: 0,
            cumWaterInflux: 0,
          },
        ],
        firstPressure: initPressure,
      });

      //&& this.state.pressures.length > 1 && this.state.pressures.length <= 3
    } else if (time > 0 && pressures.length > 1 && pressures.length <= 3) {
      //CALCULATE THE MEAN PRESSURE
      let meanPressure = (this.state.firstPressure - initPressure) / 2;
      let halfCalc = constant * meanPressure;
      let halfCalculated = [...this.state.halfCalculated];
      halfCalculated.push(halfCalc);
      let dimTimes = [...this.state.dimTimes];
      dimTimes.push(dimTime);
      let reversedDimTimes = dimTimes.reverse();
      this.setState({
        results: [
          ...this.state.results,
          {
            time,
            initPressure,
			dimTime,
			meanPressure,
            cumWaterInflux: halfCalculated
              .map((value, i) => {
                return value * reversedDimTimes[i];
              })
              .reduce((prev, next) => {
                return prev + next;
              }),
          },
        ],
        // firstPressure: initPressure,
        pressures: pressures,
        halfCalculated: halfCalculated,
        dimTimes: dimTimes,
      });
    } else if (time > 0 && pressures.length > 3) {
      let meanPressure = (pressures[pressures.length - 3] - initPressure) / 2;
      let halfCalc = constant * meanPressure;
      let halfCalculated = [...this.state.halfCalculated];
      halfCalculated.push(halfCalc);
      console.log(halfCalculated);
      let dimTimes = [...this.state.dimTimes];
      dimTimes.push(dimTime);
      //use sorting here
      let reversedDimTimes = dimTimes.sort((a, b) => b - a);
      console.log(reversedDimTimes);
      this.setState({
        results: [
          ...this.state.results,
          {
            time,
            initPressure,
			dimTime,
			meanPressure,
            cumWaterInflux: halfCalculated
              .map((value, i) => {
                return value * reversedDimTimes[i];
              })
              .reduce((prev, next) => {
                return prev + next;
              }),
          },
        ],
        // firstPressure: initPressure,
        pressures: pressures,
        halfCalculated: halfCalculated,
        dimTimes: dimTimes,
      });
      console.log(meanPressure);
    }
    //console.log(time, initPressure, dimTime, pressures);
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onSubmitHandler: this.onSubmitHandler }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
