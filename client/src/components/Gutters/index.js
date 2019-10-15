import React from "react";
import "./style.css";
export function LeftGutter(props) {
  return <div className="leftGutter">{props.children}</div>;
}
export function RightGutter(props) {
  return <div className="rightGutter">{props.children}</div>;
}
