import React from "react";

class Characters extends React.Component {
  state = { characters: "" };

  async componentDidMount() {
    const url = "https://www.breakingbadapi.com/api/characters";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ characters: data.length });
  }
  render() {
    return (
      <div>
        <h2>Characters: {this.state.characters} </h2>
      </div>
    );
  }
}

export default Characters;
