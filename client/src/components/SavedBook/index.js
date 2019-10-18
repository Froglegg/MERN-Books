import "./style.css";
import StarRatings from "react-star-ratings";

import React from "react";

const SavedBook = props => {
  return (
    <div className="bookItem">
      <h3 className="title" data-id={props.bookId} isbn={props.isbn}>
        {props.title}
      </h3>
      <StarRatings
        rating={props.rating}
        starRatedColor="#A6B3EA"
        numberOfStars={6}
        name="rating"
        starDimension="20px"
        starSpacing="2px"
      />
      <div>
        <a href={props.infoLink}>
          <img
            className="bookImage"
            alt="no book cover found"
            src={props.imageLink}
          ></img>
        </a>
        <p className="description">
          <a href={props.infoLink}>More information</a>
        </p>
      </div>
      <p className="author">
        By&nbsp;
        {props.authors}
      </p>
      <p className="description">{props.description}</p>
      <button
        className="buttonDelete"
        onClick={() => {
          props.handleDelete(props.bookId);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default SavedBook;
