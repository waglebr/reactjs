import React, { Component } from "react";
//Stateless Functional Component
// destructuring argument (instead of using "props")
const NavBar = ({ qtdTipos, qtdTotal, onReset, onUpdate }) => {
  return (
    <nav className="navbar navbar-dark">
      <nav className="navbar-brand">
        Sumary:
        <br />
        <span className="badge badge-pill badge-secondary">
          Products: {qtdTipos}
        </span>
        <br />
        <span className="badge badge-pill badge-secondary">
          Total Quantity: {qtdTotal}
        </span>
        <span className="ml-4">
          <button className="btn btn-primary btn-sm" onClick={onReset}>
            Reset
          </button>
        </span>
        <br />
        Add Products:
        <br />
        <div className="input-group input-group-sm">
          <span className="badge mr-2 badge-dark">Product ID:</span>
          <input className="form-control" id="field1" type="text" />
        </div>
        <div className="input-group input-group-sm">
          <span className="badge mr-2 badge-dark">Product Qty:</span>
          <input className="form-control" id="field2" type="number" />
        </div>
        <button className="btn btn-warning btn-sm m-2" onClick={onUpdate}>
          Save
        </button>
      </nav>
    </nav>
  );
};

export default NavBar;
