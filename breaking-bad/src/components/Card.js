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
            <span className="date">{props.joinDate}</span>
          </div>

          <div className="card-info-grid">
            <div className="description">
              <div className="desc">
                <h3>{props.movies}</h3>
                <p>Movies</p>
              </div>
            </div>

            <div className="description">
              <div className="desc">
                <h3>{props.awards}</h3>
                <p>Awards</p>
              </div>
            </div>

            <div className="description">
              <div className="desc">
                <h3>{props.shows}</h3>
                <p>TV Shows</p>
              </div>
            </div>

            <div className="description">
              <div className="desc">
                <h3>{props.followers}</h3>
                <p>Followers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
