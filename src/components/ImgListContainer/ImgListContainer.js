import React, { Component } from "react";
import BigImage from "../BigImage/BigImage";
import ListOfProducts from "../listOfProducts/ListOfProducts";
import "./ImgListContainer.css";
export default class ImgListContainer extends Component {
  render() {
    return (
      <div className="ImgListContainer">
        <div className="list">
          <ListOfProducts />
        </div>
        <dev className="bigImg">
          <BigImage />
        </dev>
      </div>
    );
  }
}
