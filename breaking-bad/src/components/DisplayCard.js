import React from "react";
import Card from "./Card";
import axios from "axios";
import Nav from "./Nav.css";

class DisplayCard extends React.Component {
  state = { persons: [] };

  async componentDidMount() {
    axios
      .get(`https://www.breakingbadapi.com/api/characters`)
      .then((response) => {
        const shuffled = response.data.sort(() => 0.5 - Math.random());
        //shuffle the data array each time

        let persons = shuffled.slice(0, 8);
        //first 8 items from the shuffled array

        this.setState({ persons });
        console.log(shuffled);
      });
  }

  render() {
    return (
      <div
        className="row
      my-5
      mx-3
      justify-content-center
      align-items-center
      text-center
      g-6"
      >
        {this.state.persons.map((person) => (
          <Card
            cardImage={person.img}
            cardTitle={person.name}
            occupation={person.occupation}
            status={person.status}
            birthday={person.birthday}
            appearance={person.appearance.length}
            portrayed={person.portrayed}
          />
        ))}
      </div>
    );
  }
}

export default DisplayCard;
