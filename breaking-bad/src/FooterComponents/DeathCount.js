import React from "react";

class DeathCount extends React.Component {
  state = { deaths: "" };

  async componentDidMount() {
    const url = "https://breakingbadapi.com/api/death-count";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ deaths: data[data.length - 1] });
  }
  render() {
    return (
      <div>
        <h2>Total Deaths: {this.state.deaths.deathCount} </h2>
      </div>
    );
  }
}

export default DeathCount;
