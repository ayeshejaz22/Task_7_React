import React from "react";
import Nav from "./Nav.css";

const SearchBar = (props) => {
  return (
    <div className="main-segment">
      <div className="breaking-bad-title">
        <h1>{props.title}</h1>
      </div>

      <form className="ui form">
        <div className="input-field">
          <input type="text" placeholder={props.placeholder} />
          <button type="submit">{props.formButton}</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
