import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import DisplayCard from "./DisplayCard";
import Nav from "./Nav.css";
import Logo from "./logo.png";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar logo={Logo} login="Login" />

        <SearchBar />

        <div className="grid-container-card">
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
        </div>

        <div className="grid-container-card">
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
        </div>

        <Footer footerInfo="32" />
      </div>
    );
  }
}

export default App;
