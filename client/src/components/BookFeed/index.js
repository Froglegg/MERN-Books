import React, { Component } from "react";
import { subscribeToBookFeed } from "../../utils/BookFeed";
import "./style.css";
class BookFeed extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    subscribeToBookFeed((err, data) =>
      this.setState({
        bookTitle: data.title,
        bookLink: data.infoLink
      })
    );
  }

  state = {
    data: "no data yet"
  };

  book = this.state.data;
  render() {
    return (
      <p className="feed">
        Most recently saved book (click to learn more!)
        <p className="feed">
          <a href={this.state.bookLink}>{this.state.bookTitle}</a>
          <div className="header-border"></div>
        </p>
      </p>
    );
  }
}

export default BookFeed;
