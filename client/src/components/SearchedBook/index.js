import "./style.css";

import React from "react";

const SearchedBook = props => {
  return (
    <div className="bookItem">
      <p data-id={props.bookId}>Title: {props.title}</p>
      <p>
        By
        <ul>
          {props.authors.map(author => (
            <li>{author}</li>
          ))}
        </ul>
      </p>
      <div>
        <img className="bookImage" src={props.imageLink}></img>
      </div>
      <p>{props.description}</p>
      <button
        onClick={() => {
          props.handleSaveEvent(props.bookId);
        }}
      >
        Save
      </button>
    </div>
  );
};

export default SearchedBook;
