import React from "react";

class Quotes extends React.Component {
  state = { quotes: "" };

  async componentDidMount() {
    const url = "https://breakingbadapi.com/api/quotes";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ quotes: data.length });
  }
  render() {
    return (
      <div>
        <h2>Quotes: {this.state.quotes} </h2>
      </div>
    );
  }
}

export default Quotes;
