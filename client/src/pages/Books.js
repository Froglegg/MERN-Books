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
    searchTitle: ""
  };

  // get saved books and reset search field on component did mount
  componentDidMount() {
    Handler.resetBooks(this);
  }

  // load saved books on component
  componentDidUpdate() {
    Handler.loadBooks(this);
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
    Handler.handleSearchEvent(this);
  };

  // handle save event, passing ID from props and state from This
  handleSaveEvent = bookId => {
    Handler.handleSaveEvent(bookId, this, () => {
      Handler.loadBooks(this);
    });
  };

  // handle delete event, passing ID from props
  handleDelete = bookId => {
    Handler.handleDelete(bookId);
  };

  render() {
    return (
      <>
        <LeftGutter />
        <SearchedBookWrapper>
          <FormWrapper>
            <form>
              <Input
                name="searchTitle"
                placeholder="Title (required)"
                onChange={this.handleInputChange}
              />
              <FormBtn onClick={this.handleSearchEvent}>
                Search for Book
              </FormBtn>
            </form>
          </FormWrapper>
          <br></br>
          <br></br>
          <br></br>
          {this.state.searchedBooks.map(book => (
            <SearchedBook
              // this book id is from Google Books search result
              key={book.id}
              bookId={book.id}
              title={book.volumeInfo.title ? book.volumeInfo.title : ""}
              authors={book.volumeInfo.authors ? book.volumeInfo.authors : []}
              description={
                book.volumeInfo.description ? book.volumeInfo.description : ""
              }
              ISBN={
                book.volumeInfo.industryIdentifiers
                  ? book.volumeInfo.industryIdentifiers[0].identifier
                  : "no ISBN"
              }
              imageLink={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : noBookImage
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
              authors={book.authors ? book.authors : "No authors(s)"}
              description={
                book.description ? book.description : "No description"
              }
              ISBN={book.ISBN ? book.ISBN : "No ISBN"}
              imageLink={book.imageLink ? book.imageLink : noBookImage}
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
