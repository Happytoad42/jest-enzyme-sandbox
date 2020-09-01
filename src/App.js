import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleIncrement = this.handleIncrement.bind(this);
  }

  state = {
    counter: 0,
  };

  handleIncrement() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }

  render() {
    return (
      <div data-test="component-app" className="App">
        <h1>Learn react Testing</h1>
        <h2 data-test="counter-display">
          Current counter is {this.state.counter}
        </h2>
        <button data-test="increment-button" onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
    );
  }
}

export default App;
