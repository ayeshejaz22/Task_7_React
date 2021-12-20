import React from "react";
import Nav from "./Nav.css";

const Footer = (props) => {
  return (
    <div className="section-footer">
      <div className="footer">
        <div className="footer-title">
          <h2>Characters: {props.footerInfo}</h2>
        </div>
        <div className="footer-title">
          <h2>Episodes: {props.footerInfo} </h2>
        </div>
        <div className="footer-title">
          <h2>Quotes: {props.footerInfo}</h2>
        </div>
        <div className="footer-title">
          <h2>Total Deaths: {props.footerInfo}</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
