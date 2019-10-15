import "./style.css";

import React from "react";

const SavedBook = props => {
  return (
    <div>
      <div>
        <p data-id={props.bookId} data-ISBN={props.ISBN}>
          Title: {props.title}
        </p>
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
            props.handleDelete(props.bookId);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default SavedBook;
