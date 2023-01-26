import React, { Component } from "react";
import "./Navbar.css";
export default class Navbar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <dev className="navBar">
        <nav className="rightNav">
          <a href="#contactUs">word1</a>

          <a href="#AboutMine">word2</a>

          <a href="#word1">word3</a>

          <a href="#word2">word4</a>

          <a href="#word3">word5</a>

          <a href="#word4">word6</a>
        </nav>
        <nav className="leftNav">
          <a href="#word1">word1</a>

          <a href="#word2">word2</a>

          <a href="#word3">word3</a>

          <a href="#word4">word4</a>
          <a href="#AboutMine">About Mine</a>
          <a href="#contactUs">Contact Us</a>
        </nav>
      </dev>
    );
  }
}
