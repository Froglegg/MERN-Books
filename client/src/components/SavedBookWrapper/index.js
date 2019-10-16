import React from "react";
// import "../Wrapper/style.css";
import "./style.css";

function SavedBookWrapper(props) {
  return (
    <>
      <div className="savedBookWrapper"> {props.children}</div>
    </>
  );
}

export default SavedBookWrapper;
