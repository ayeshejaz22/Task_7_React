import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import DisplayCard from "./DisplayCard";
import Logo from "./logo.png";
import Footer from "./Footer";
import { Container, Row, Col } from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div className="container-xxl p-0">
        <Navbar logo={Logo} login="Login" />

        <div className="container-xxl p-0 m-0 justify-content-center">
          <SearchBar />
        </div>

        <section className="section-cards py-3">
          <div className="container-xxl">
            <DisplayCard />
          </div>
        </section>

        <div className="container-xxl p-0">
          <Footer footerInfo="32" />
        </div>
      </div>
    );
  }
}

export default App;
