import React from "react";
import Nav from "./Nav.css";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div>
        <a href="/">
          <img alt="logo" src={props.logo} style={{ width: "100px" }}></img>
        </a>
      </div>
      <div>
        <a className="nav-login" href="/">
          {props.login}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
