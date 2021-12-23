import React from "react";
import Nav from "./Nav.css";
import Characters from "../FooterComponents/Characters";
import Episodes from "../FooterComponents/Episodes";
import Quotes from "../FooterComponents/Quotes";
import DeathCount from "../FooterComponents/DeathCount";

class Footer extends React.Component {
  render() {
    return (
      <div className="section-footer">
        <div className="footer">
          <div className="footer-title">
            <Characters />
          </div>
          <div className="footer-title">
            <Episodes />
          </div>
          <div className="footer-title">
            <Quotes />
          </div>
          <div className="footer-title">
            <DeathCount />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
