import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    quantity: [
      { id: "A", value: 1 },
      { id: "B", value: 2 },
      { id: "C", value: 3 },
      { id: "D", value: 4 }
    ]
  };
  handleReset = () => {
    window.location.reload();
  };
  /* handleReset = () => {
    const quantity = this.state.quantity.map(i => {
      i.value = 0;
      return i;
    });
    this.setState({ quantity });
  }; */

  handleRemove = quantityId => {
    // It's necessary to pass the ID so React can know which element to remove.
    const quantity = this.state.quantity.filter(i => i.id !== quantityId); // Creates a new array filtering out the selected ID.
    this.setState({ quantity }); // Because it's "quantity : quantity", it can be simplified to just one word.
  };
  render() {
    return (
      <div>
        {this.state.quantity.map(i => (
          <Counter
            onRemove={this.handleRemove}
            key={i.id}
            id={i.id}
            value={i.value}
          />
        ))}
        <br />
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
