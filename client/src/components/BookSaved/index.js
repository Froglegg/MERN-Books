// import React, { Component } from "react";
import "./style.css";
import React from "react";

const BookSaved = props => {
  return (
    <p className="feed">
      Most recently saved book (click to learn more!)
      <p className="feed">
        <a href={props.bookLink}>{props.bookTitle}</a>
        <div className="header-border"></div>
      </p>
    </p>
  );
};

export default BookSaved;
