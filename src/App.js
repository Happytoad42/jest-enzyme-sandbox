import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.showErrorMessage = this.showErrorMessage.bind(this);
  }

  state = {
    counter: 0,
    errorMessage: "",
  };

  showErrorMessage(message) {
    this.setState({ errorMessage: message });
    setTimeout(
      function () {
        this.setState({ errorMessage: "" });
      }.bind(this),
      2000
    );
  }

  handleIncrement() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }

  handleDecrement() {
    if (this.state.counter > 0) {
      this.setState((state) => ({
        counter: state.counter - 1,
      }));
    } else {
      this.showErrorMessage("Counter cannot be less than 0");
    }
  }

  render() {
    return (
      <div data-test="component-app" className="App">
        <h1>Learn react Testing</h1>
        <h2 data-test="counter-display">
          Current counter is {this.state.counter}
        </h2>
        <button data-test="increment-button" onClick={this.handleIncrement}>
          +
        </button>
        <button data-test="decrement-button" onClick={this.handleDecrement}>
          -
        </button>
        <p data-test="error-message" style={{ color: "red" }}>
          {this.state.errorMessage}
        </p>
      </div>
    );
  }
}

export default App;
