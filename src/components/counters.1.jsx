import React, { Component } from "react";
import Counter from "./counter.1";

class Counters extends Component {
  render() {
    // destructuring argument (instead of using "props")
    const {
      quantity,
      onIncrement,
      onDecrement,
      onRemove,
      onEmpty
    } = this.props;
    return (
      <div>
        {quantity.map(i => (
          <Counter
            key={i.id}
            quantity={i}
            onRemove={onRemove}
            onEmpty={onEmpty}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
