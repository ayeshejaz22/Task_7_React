import React from "react";
import Nav from "./Nav.css";

const Card = (props) => {
  return (
    <div className="main-cards">
      <div className="ui card" style={{ width: "250px" }}>
        <div className="cards">
          <div className="card-image">
            <img alt="Anna" src={props.cardImage}></img>
          </div>
          <div className="card-header">
            <a className="header" href="/">
              {props.cardTitle}
            </a>
          </div>

          <div className="card-content">
            <span className="occupation">Occupation: {props.occupation}</span>
          </div>

          <div className="card-info-grid">
            <div className="description">
              <div className="desc">
                <h5>{props.status}</h5>
                <p>Status</p>
              </div>
            </div>

            <div className="description">
              <div className="desc">
                <h5>{props.birthday}</h5>
                <p>Date of Birth</p>
              </div>
            </div>

            <div className="description">
              <div className="desc">
                <h5>{props.appearance}</h5>
                <p>Appearance</p>
              </div>
            </div>

            <div className="description">
              <div className="desc">
                <h5>{props.portrayed}</h5>
                <p>Portrayed by</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
