import React, { Component } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logoImg from "../images/grocery-shopping-cart-with-stars-5858ld.png";
export default class Header extends Component {
  render() {
    return (
      <div className="mainHeader">
        <dev className="logo">
          <img src={logoImg} alt="logo" />
        </dev>
        <dev className="searchBar">
          <input type="text" id="searchBar" />
          <button id="searchButton">
            <FontAwesomeIcon icon={faSearch} id="searchIcon" />
          </button>
        </dev>
        <dev className="myCart">
          <p>Shopping cart</p>
          <FontAwesomeIcon icon={faCartShopping} id="icon" />
        </dev>
      </div>
    );
  }
}
