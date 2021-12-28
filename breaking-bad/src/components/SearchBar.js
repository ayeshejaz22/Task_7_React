import React from "react";
import { Container, Row, Col } from "react-dom";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
  };

  render(props) {
    return (
      <div className="main-segment">
        <div className="breaking-bad-title">
          <h1>The Breaking Bad</h1>
        </div>

        <form onSubmit={this.onFormSubmit} className="ui form py-2">
          <div className="input-field">
            <input
              onChange={this.onInputChange}
              value={this.state.term}
              type="text"
              placeholder="Search.."
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
