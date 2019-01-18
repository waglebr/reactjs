import React, { Component } from "react";

class Counter extends Component {
  state = { counter: this.props.value };

  handleIncrement = () => {
    //It's necessary to use arrow function to inherit the "this" reference: "function name = () => {statement}".
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }; // You have to explicitly tell React what's changing so it can keep track of it.

  handleDecrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  };

  handleEmpty = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      // Returns a new React element:
      <div>
        <span className="badge mr-2 badge-dark">
          <h6>Product {this.props.id} :</h6>
        </span>
        <button
          className="btn btn-warning btn-sm m-2"
          disabled={this.state.counter < -4 ? true : false}
          onClick={this.handleDecrement}>
          -
        </button>

        <span className={this.badgeStyle()}>
          {this.state.counter === 5
            ? "Full: " + this.state.counter
            : this.state.counter === 0
            ? "Sold out"
            : this.state.counter < -4
            ? "Total loss"
            : this.state.counter < 0
            ? "Loss: " + this.state.counter
            : "Qty: " + this.state.counter}
        </span>

        <button
          className="btn btn-success btn-sm mr-2"
          disabled={this.state.counter >= 5 ? true : false}
          onClick={this.handleIncrement}>
          +
        </button>

        <button
          className="btn btn-light btn-sm m-2"
          disabled={this.state.counter <= 0 ? true : false}
          onClick={this.handleEmpty}>
          Sold out
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onRemove(this.props.id)}>
          Remove
        </button>
      </div>
    );
  }

  badgeStyle() {
    let classes = "badge m-2 badge-";

    if (this.state.counter <= 0) {
      return (classes += "light");
    }

    if (this.state.counter === 5) {
      return (classes += "secondary");
    } else {
      return (classes += "primary");
    }
  }
}

export default Counter;
