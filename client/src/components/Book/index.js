import "./style.css";

import React from "react";

const Book = props => {
  return (
    <div>
      <div>
        <p>{props.title}</p>
        <p>{props.authors}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Book;
