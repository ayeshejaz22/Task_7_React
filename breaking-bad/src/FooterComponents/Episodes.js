import React from "react";

class Episodes extends React.Component {
  state = { episodes: "" };

  async componentDidMount() {
    const url = "https://breakingbadapi.com/api/episodes";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ episodes: data.length });
  }
  render() {
    return (
      <div>
        <h2>Episodes: {this.state.episodes} </h2>
      </div>
    );
  }
}

export default Episodes;
