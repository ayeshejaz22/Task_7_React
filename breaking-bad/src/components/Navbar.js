import React from "react";
import { Container, Row, Col } from "react-dom";

const Navbar = (props) => {
  return (
    <div className="container-xxl p-0">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a href="/" className="navbar-brand ms-4 p-0">
          <img alt="logo" src={props.logo} style={{ width: "100px" }}></img>
        </a>

        <a className="nav-link text-muted" href="/">
          {props.login}
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
