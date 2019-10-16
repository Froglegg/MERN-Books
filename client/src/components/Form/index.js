import React from "react";
import "./style.css";

export function Input(props) {
  return <input className="input" {...props} />;
}

export function FormBtn(props) {
  return (
    <button {...props} className="submitButton">
      {props.children}
    </button>
  );
}
