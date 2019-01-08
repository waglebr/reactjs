import React, { Component } from "react";

const NavBar = ({ qtdTipos, qtdTotal }) => {
  // destructuring argument (instead of using "props")
  return (
    <nav className="navbar navbar-light bg-light">
      {/* Bootstrap css */}
      <a className="navbar-brand" href="#">
        Barra de Navegação
        {/* Bootstrap css  */}
        Produtos:
        <span className="badge badge-pill badge-secondary">
          {qtdTipos}
          {/* Bootstrap css  */}
        </span>
        Quantidade total:
        <span className="badge badge-pill badge-secondary">
          {qtdTotal}
          {/* Bootstrap css  */}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
