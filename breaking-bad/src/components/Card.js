import React from "react";

const Card = (props) => {
  return (
    <div className="col-8 col-sm-6 col-md-6 col-lg-4 col-xl-3 justify-content-center">
      <div
        className="card border-1 rounded shadow-sm my-1 mx-1 py-2 px-2 mb-5"
        style={{ width: "280px", height: "400px" }}
      >
        <div className="card-body text-center py-4">
          <div className="card-image">
            <img alt="img" src={props.cardImage}></img>
          </div>
          <div className="card-header bg-white">
            <a className="header" href="/">
              {props.cardTitle}
            </a>
          </div>

          <div className="card-content">
            <span className="occupation">Occupation: {props.occupation}</span>
          </div>

          <div className="card-info-grid">
            <div className="description p-2">
              <div className="desc">
                <h6>{props.status}</h6>
                <p>Status</p>
              </div>
            </div>

            <div className="description p-2">
              <div className="desc">
                <h6>{props.birthday}</h6>
                <p>Date of Birth</p>
              </div>
            </div>

            <div className="description p-2">
              <div className="desc">
                <h6>{props.appearance}</h6>
                <p>Appearance</p>
              </div>
            </div>

            <div className="description p-2">
              <div className="desc">
                <h6>{props.portrayed}</h6>
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
