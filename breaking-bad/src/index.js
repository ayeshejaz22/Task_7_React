import React from "react";
import ReactDom from "react-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Nav from "../src/components/Nav.css";
import Logo from "./components/logo.png";
import Anna from "./images/anna.png";
import Dean from "./images/dean.png";
import Betsy from "./images/betsy.png";
import Bryan from "./images/bryan.png";
import Jesse from "./images/jesse.png";
import Krysten from "./images/krysten.png";
import Mitte from "./images/mitte.png";
import Emily from "./images/emily.png";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar logo={Logo} login="Login" />

      <SearchBar
        title="The Breaking Bad"
        placeholder="Search.."
        formButton="Submit"
      />

      <div className="grid-container-card">
        <Card
          cardImage={Anna}
          cardTitle="Anna Gun"
          joinDate="Years active: 1992 — present"
          movies="12"
          awards="5"
          shows="22"
          followers="400k"
        />

        <Card
          cardImage={Dean}
          cardTitle="Dean Norris"
          joinDate="Years active: 1985 — present"
          movies="47"
          awards="10"
          shows="14"
          followers="1.1M"
        />
        <Card
          cardImage={Betsy}
          cardTitle="Betsy Brandt"
          joinDate="Years active: 1998 — present"
          movies="6"
          awards="2"
          shows="17"
          followers="200k"
        />
        <Card
          cardImage={Bryan}
          cardTitle="Bryan Cranston"
          joinDate="Years active: 1980 — present"
          movies="58"
          awards="8"
          shows="23"
          followers="5M"
        />
      </div>

      <div className="grid-container-card">
        <Card
          cardImage={Jesse}
          cardTitle="Jesse Plemons"
          joinDate="Years active: 1991 — present"
          movies="31"
          awards="3"
          shows="14"
          followers="506k"
        />
        <Card
          cardImage={Krysten}
          cardTitle="Krysten Ritter"
          joinDate="Years active: 2001 — present"
          movies="17"
          awards="1"
          shows="8"
          followers="300k"
        />
        <Card
          cardImage={Mitte}
          cardTitle="RJ Mitte"
          joinDate="Years active: 2006 — present"
          movies="7"
          awards="2"
          shows="4"
          followers="107k"
        />
        <Card
          cardImage={Emily}
          cardTitle="Emily Rios"
          joinDate="Years active: 2005 — present"
          movies="7"
          awards="0"
          shows="3"
          followers="100k"
        />
      </div>

      <Footer footerInfo="32" />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
