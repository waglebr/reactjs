import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      // Returns a new React element:
      <div>
        <span className="badge mr-2 badge-dark">
          <h6>Product {this.props.id} :</h6>
        </span>
        <button
          className="btn btn-warning btn-sm m-2"
          disabled={this.props.value < -4 ? true : false}
          onClick={this.props.onDecrement}>
          -
        </button>

        <span className={this.badgeStyle()}>
          {this.props.value === 5
            ? "Full: " + this.props.value
            : this.props.value === 0
            ? "Sold out"
            : this.props.value < -4
            ? "Total loss: " + this.props.value
            : this.props.value < 0
            ? "Loss: " + this.props.value
            : this.props.value}
        </span>

        <button
          className="btn btn-success btn-sm mr-2"
          disabled={this.props.value >= 5 ? true : false}
          onClick={this.props.onIncrement}>
          +
        </button>

        <button
          className="btn btn-light btn-sm m-2"
          disabled={this.props.value <= 0 ? true : false}
          onClick={this.props.onEmpty}>
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

    if (this.props.value <= 0) {
      return (classes += "light");
    }

    if (this.props.value === 5) {
      return (classes += "secondary");
    } else {
      return (classes += "primary");
    }
  }
}

export default Counter;
