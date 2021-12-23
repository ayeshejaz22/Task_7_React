import React from "react";
import Card from "./Card";

class DisplayCard extends React.Component {
  state = { person: "" };

  async componentDidMount() {
    const url = " https://www.breakingbadapi.com/api/characters";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      person: data[Math.floor(Math.random() * data.length)],
    });
  }
  render() {
    return (
      <div>
        <Card
          cardImage={this.state.person.img}
          cardTitle={this.state.person.name}
          occupation={this.state.person.occupation}
          status={this.state.person.status}
          birthday={this.state.person.birthday}
          appearance={this.state.person.appearance}
          portrayed={this.state.person.portrayed}
        />
      </div>
    );
  }
}

export default DisplayCard;
