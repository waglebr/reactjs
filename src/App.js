import React, { Component } from "react";
import Counter from "./components/counter";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Counter />
      </React.Fragment>
    );
  }
}

export default App;
