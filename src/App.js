import React, { Component } from "react";
import Counters from "./components/counters.1";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    quantity: [
      { id: "A", value: 1 },
      { id: "B", value: 2 },
      { id: "C", value: 3 },
      { id: "D", value: 4 }
    ]
  };

  handleIncrement = qty => {
    const quantity = [...this.state.quantity];
    const index = quantity.indexOf(qty);
    quantity[index].value++;
    //It's necessary to use arrow function to inherit the "this" reference: "function name = () => {statement}".
    this.setState({
      quantity
    });
  };
  handleDecrement = qty => {
    const quantity = [...this.state.quantity];
    const index = quantity.indexOf(qty);
    quantity[index].value--;
    //It's necessary to use arrow function to inherit the "this" reference: "function name = () => {statement}".
    this.setState({
      quantity
    });
  };

  handleEmpty = qty => {
    const quantity = [...this.state.quantity];
    const index = quantity.indexOf(qty);
    quantity[index].value = 0;
    this.setState({ quantity });
  };
  handleUpdate = () => {
    const id = document.querySelector("#field1").value;
    const value = document.querySelector("#field2").value;
    const quantity = [...this.state.quantity];
    quantity.push({ id: id, value: value });
    this.setState({ quantity });
  };

  /* Alternative to reload the whole page:
  handleReset = () => {
    window.location.reload();
  };
 */

  handleReset = () => {
    const quantity = [
      //cloning doesn't work. It's necessary to do a deep copy but I don't know how to do it.
      { id: "A", value: 1 },
      { id: "B", value: 2 },
      { id: "C", value: 3 },
      { id: "D", value: 4 }
    ];
    this.setState({
      quantity
    }); // Because it's "quantity : quantity", it can be simplified to just one word.
  };

  handleRemove = qtyID => {
    // It's necessary to pass the ID so React can know which element to remove.
    const quantity = this.state.quantity.filter(i => i.id !== qtyID); // Creates a new array filtering out the selected ID.
    this.setState({ quantity }); // Because it's "quantity : quantity", it can be simplified to just one word.
  };

  handleTotal = () => {
    let x = 0;
    this.state.quantity.map(i => (x += i.value));
    return x;
  };

  render() {
    return (
      <React.Fragment>
        <Counters
          quantity={this.state.quantity}
          onIncrement={this.handleIncrement}
          onEmpty={this.handleEmpty}
          onRemove={this.handleRemove}
          onDecrement={this.handleDecrement}
        />
        <NavBar
          onReset={this.handleReset}
          qtdTipos={this.state.quantity.filter(i => i.value > 0).length}
          qtdTotal={this.handleTotal()}
          onUpdate={this.handleUpdate}
        />
      </React.Fragment>
    );
  }
}

export default App;
