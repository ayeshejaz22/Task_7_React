import React from "react";
import { Container, Row, Col } from "react-dom";
import Characters from "../FooterComponents/Characters";
import Episodes from "../FooterComponents/Episodes";
import Quotes from "../FooterComponents/Quotes";
import DeathCount from "../FooterComponents/DeathCount";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section-footer bg-light py-5">
        <div className="container-xl">
          <div
            className="row
              text-muted
              justify-content-center
              align-items-center
              space-between-evenly
              g-5
              ps-5"
          >
            <div className="col-lg-3 col-md-3 mt-5">
              <Characters />
            </div>
            <div className="col-lg-3 col-md-3 mt-5">
              <Episodes />
            </div>
            <div className="col-lg-3 col-md-3 mt-5">
              <Quotes />
            </div>
            <div className="col-lg-3 col-md-3 mt-5">
              <DeathCount />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
