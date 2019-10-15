import React from "react";
// import "../Wrapper/style.css";
import "./style.css";

function SavedBookWrapper(props) {
  return (
    <div className="savedBookWrapper">
      <h2>Saved Books</h2>
      {props.children}
    </div>
  );
}

export default SavedBookWrapper;
