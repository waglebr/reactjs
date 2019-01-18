import React, { Component } from "react";
//Stateless Functional Component
// destructuring argument (instead of using "props")
const NavBar = ({ qtdTipos, qtdTotal, onReset }) => {
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
      </nav>
    </nav>
  );
};

export default NavBar;
