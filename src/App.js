import React, { Component } from "react";
import BigImage from "./components/BigImage/BigImage";
import Header from "./components/Header/Header";
import ImgListContainer from "./components/ImgListContainer/ImgListContainer";
import ListOfProducts from "./components/listOfProducts/ListOfProducts";
import Navbar from "./components/Navbar/Navbar";

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Navbar />
        <Header />
        <ImgListContainer />
      </div>
    );
  }
}
