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
        <dev className="myCart">
          <FontAwesomeIcon icon={faCartShopping} id="icon" />
          <p>Shopping cart</p>
        </dev>
        <dev className="searchBar">
          <button id="searchButton">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input type="text" id="searchBar" />
        </dev>
        <dev className="logo">
          <img src={logoImg} alt="logo" />
        </dev>
      </div>
    );
  }
}
