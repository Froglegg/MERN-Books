import React from "react";
import "./style.css";

export function Input(props) {
  return (
    <div className="input">
      <input {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button
      {...props}
      className="submitButton"
      style={{ float: "right", marginBottom: 10 }}
    >
      {props.children}
    </button>
  );
}
