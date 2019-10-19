import React from "react";
import "./style.css";

function SearchedBookWrapper(props) {
  return <div className="searchedBookWrapper">{props.children}</div>;
}

export default SearchedBookWrapper;
