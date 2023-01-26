import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import "./BigImage.css";
import try1 from "../../components/BigImage/BIG1.jpg";
import try2 from "../BigImage/BIG2.webp";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default class BigImage extends Component {
  constructor() {
    super();
    this.state = {
      newIndex: 0,
      index: 0,
      src: [try1, try2],
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ newIndex: this.state.newIndex + 1 });
      setTimeout(() => {
        this.setState({ index: this.state.newIndex });
      }, 500);

      if (this.state.index == this.state.src.length - 1) {
        this.setState({ newIndex: 0 });
      }
    }, 5000);
  }

  render() {
    return (
      <div className="BigMain">
        <div
          className={
            this.state.newIndex === this.state.index ? "active slide" : "slide"
          }
        >
          <img id="imgContainer" src={this.state.src[this.state.index]} />
        </div>
      </div>
    );
  }
}
