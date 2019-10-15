import React from "react";
import "./style.css";

function formWrapper(props) {
  return <div className="formWrapper">{props.children}</div>;
}

export default formWrapper;
