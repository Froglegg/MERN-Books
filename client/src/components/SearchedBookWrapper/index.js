import React from "react";
// import "../Wrapper/style.css";
import "./style.css";

function SearchedBookWrapper(props) {
  return (
    <div className="searchedBookWrapper">
      <h2>Search Results</h2>
      {props.children}
    </div>
  );
}

export default SearchedBookWrapper;
