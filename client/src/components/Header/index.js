import React from "react";
import "./style.css";
// you can switch out the bookSaved or bookFeed functions with this header...
// import BookFeed from "../BookFeed";
import BookSaved from "../BookSaved";
function Header(props) {
  return (
    <div className="headerWrapper">
      <div className="header">
        <h1>MERN Book Search</h1>
      </div>
      {/* <BookFeed /> */}
      <BookSaved bookLink={props.bookLink} bookTitle={props.bookTitle} />
    </div>
  );
}

export default Header;
