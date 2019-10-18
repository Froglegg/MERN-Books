import React from "react";
import "./style.css";
import BookFeed from "../BookFeed";
function Header() {
  return (
    <div className="headerWrapper">
      <div className="header">
        <h1>MERN Book Search</h1>
      </div>
      <BookFeed />
    </div>
  );
}

export default Header;
