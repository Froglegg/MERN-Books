import React, { Component } from "react";
import { LeftGutter, RightGutter } from "../components/Gutters";
import FormWrapper from "../components/FormWrapper";
import { Input, FormBtn } from "../components/Form";
import SearchedBookWrapper from "../components/SearchedBookWrapper";
import SearchedBook from "../components/SearchedBook";
import SavedBookWrapper from "../components/SavedBookWrapper";
import SavedBook from "../components/SavedBook";
import Handler from "../utils/Handler";
import noBookImage from "./noBookImage.jpg";

class Books extends Component {
  // Initialize this.state.books as an empty array
  state = {
    searchedBooks: [],
    savedBooks: [],
    searchTitle: "",
    bookTitle: "",
    bookLink: ""
  };

  // get saved books and reset search field on component did mount
  componentDidMount() {
    Handler.resetBooks(this, () => console.log("callback ran"));
  }

  // grab input change on component, update state.
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //handle search event, passing state from This
  handleSearchEvent = event => {
    event.preventDefault();
    Handler.handleSearchEvent(this, () => Handler.loadBooks(this));
  };

  // handle save event, passing ID from props and state from This
  handleSaveEvent = bookId => {
    Handler.handleSaveEvent(bookId, this, () => Handler.loadBooks(this));
  };

  // handle delete event, passing ID from props
  handleDelete = bookId => {
    Handler.handleDelete(bookId, () => Handler.loadBooks(this));
  };

  render() {
    return (
      <>
        <LeftGutter />
        <SearchedBookWrapper>
          <FormWrapper>
            <form style={{ display: "flex", flexDirection: "column" }}>
              <Input
                name="searchTitle"
                placeholder="Title (required)"
                onChange={this.handleInputChange}
              />
              <FormBtn onClick={this.handleSearchEvent}>Search</FormBtn>
            </form>
          </FormWrapper>

          {this.state.searchedBooks.map(book => (
            <SearchedBook
              // this book id is from Google Books search result
              key={book.id}
              bookId={book.id}
              title={book.volumeInfo.title ? book.volumeInfo.title : ""}
              authors={
                book.volumeInfo.authors
                  ? book.volumeInfo.authors
                  : "No author(s) found"
              }
              description={
                book.volumeInfo.description ? book.volumeInfo.description : ""
              }
              isbn={
                book.volumeInfo.industryIdentifiers
                  ? book.volumeInfo.industryIdentifiers[0].identifier
                  : "no isbn"
              }
              imageLink={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : noBookImage
              }
              infoLink={
                book.volumeInfo.previewLink ? book.volumeInfo.previewLink : ""
              }
              rating={
                book.volumeInfo.averageRating
                  ? book.volumeInfo.averageRating
                  : 0
              }
              handleSaveEvent={this.handleSaveEvent}
            />
          ))}
        </SearchedBookWrapper>
        <SavedBookWrapper>
          {this.state.savedBooks.map(book => (
            <SavedBook
              //this book id is from Mongo DB API route (books/api/)
              key={book._id}
              bookId={book._id}
              title={book.title ? book.title : "No title"}
              authors={book.authors ? book.authors : "No authors(s) found"}
              description={
                book.description ? book.description : "No description"
              }
              isbn={book.isbn ? book.isbn : "No isbn"}
              imageLink={book.imageLink ? book.imageLink : noBookImage}
              infoLink={book.infoLink ? book.infoLink : ""}
              rating={book.rating ? book.rating : 0}
              handleDelete={this.handleDelete}
            />
          ))}
        </SavedBookWrapper>
        <RightGutter />
      </>
    );
  }
}

export default Books;
