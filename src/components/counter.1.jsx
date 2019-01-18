import React, { Component } from "react";

class Counter extends Component {
  render() {
    const {
      quantity,
      onIncrement,
      onDecrement,
      onRemove,
      onEmpty
    } = this.props;
    return (
      // Returns a new React element:
      <div>
        <span className="badge mr-1 badge-dark">
          <h6>Product {quantity.id} :</h6>
        </span>
        <button
          className="btn btn-warning btn-sm m-1"
          disabled={quantity.value < -4 ? true : false}
          onClick={() => onDecrement(quantity)}>
          -
        </button>

        <span className={this.badgeStyle()}>
          {quantity.value === 5
            ? "Full: " + quantity.value
            : quantity.value === 0
            ? "Sold out"
            : quantity.value < -4
            ? "Total loss: " + quantity.value
            : quantity.value < 0
            ? "Loss: " + quantity.value
            : quantity.value}
        </span>

        <button
          className="btn btn-success btn-sm mr-2"
          disabled={quantity.value >= 5 ? true : false}
          onClick={() => onIncrement(quantity)}>
          +
        </button>

        <button
          className="btn btn-light btn-sm m-1"
          disabled={quantity.value <= 0 ? true : false}
          onClick={() => onEmpty(quantity)}>
          Sold out
        </button>

        <button
          className="btn btn-danger btn-sm m-1"
          onClick={() => onRemove(quantity.id)}>
          Remove
        </button>
      </div>
    );
  }

  badgeStyle() {
    let classes = "badge m-1 badge-";

    if (this.props.quantity.value <= 0) {
      return (classes += "light");
    }

    if (this.props.quantity.value === 5) {
      return (classes += "secondary");
    } else {
      return (classes += "primary");
    }
  }
}

export default Counter;
