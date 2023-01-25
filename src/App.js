import React, { Component } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Navbar />

        <Header />
      </div>
    );
  }
}
