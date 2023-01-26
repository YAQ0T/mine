import React, { Component } from "react";
import "../listOfProducts/ListOfProduct.css";
export default class ListOfProducts extends Component {
  render() {
    return (
      <div className="mainList">
        <div className="title">כל הקטגוריות</div>
        <div className="catalogs">
          <a href="#כלי עישון">כלי עישון</a>
          <a href="#סוגי טבקים">סוגי טבקים</a>
          <a href="#אביזרי אידוי">אביזרי אידוי</a>
          <a href="#מכשירי אידוי">מכשירי אידוי</a>
        </div>
      </div>
    );
  }
}
