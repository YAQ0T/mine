import React, { Component } from "react";

export default class navbar extends Component {
  render() {
    return (
      <dev className="navBar">
        <dev className="left">
          <nav>
            <ul>
              <li>
                <a href="#contactUs">Contact Us</a>
              </li>
              <li>
                <a href="#AboutMine">About Mine</a>
              </li>
              <li>
                <a href="#word1">word1</a>
              </li>
              <li>
                <a href="#word2">word2</a>
              </li>
              <li>
                <a href="#word3">word3</a>
              </li>
              <li>
                <a href="#word4">word4</a>
              </li>
            </ul>
          </nav>
        </dev>
        <dev className="right">
          <nav>
            <ul>
              <li>
                <a href="#contactUs">word1</a>
              </li>
              <li>
                <a href="#AboutMine">word2</a>
              </li>
              <li>
                <a href="#word1">word3</a>
              </li>
              <li>
                <a href="#word2">word4</a>
              </li>
              <li>
                <a href="#word3">word5</a>
              </li>
              <li>
                <a href="#word4">word6</a>
              </li>
            </ul>
          </nav>
        </dev>
      </dev>
    );
  }
}
