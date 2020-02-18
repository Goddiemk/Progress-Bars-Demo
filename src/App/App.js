import React from "react";
import BarWrapper from "../BarWrapper/BarWrapper";
import ValueIncrementerWrapper from "../ValueIncrementerWrapper/ValueIncrementerWrapper";
import ActiveBarSelector from "../ActiveBarSelector/ActiveBarSelector";
import getAppDataService from "../services";
import "./App.css";

class App extends React.Component {
  state = {
    buttonValues: [],
    barValues: [],
    activeBarIndex: 0
  };

  componentDidMount() {
    getAppDataService().then(({ buttonValues, barValues }) =>
      this.setState({ buttonValues, barValues })
    );
  }

  changeActiveBar = activeBarIndex => () => {
    this.setState({ activeBarIndex });
  };

  changeCurrentBarValue = amount => () => {
    const { barValues, activeBarIndex } = this.state;

    const newBarValues = barValues.slice();

    // don't allow the value to go below zero
    newBarValues[activeBarIndex] = Math.max(
      0,
      newBarValues[activeBarIndex] + amount
    );

    this.setState({
      barValues: newBarValues
    });
  };

  render() {
    const { activeBarIndex, barValues, buttonValues } = this.state;

    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title">Progress Bars Demo</h1>
        </header>

        <BarWrapper
          activeBarIndex={activeBarIndex}
          barValues={barValues}
          changeActiveBar={this.changeActiveBar}
        />

        <ActiveBarSelector
          activeBarIndex={activeBarIndex}
          barValues={barValues}
          changeActiveBar={this.changeActiveBar}
        />

        <ValueIncrementerWrapper
          buttonValues={buttonValues}
          changeCurrentBarValue={this.changeCurrentBarValue}
        />
      </div>
    );
  }
}

export default App;
