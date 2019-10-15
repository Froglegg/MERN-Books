import React, { Component } from "react";
import API from "../utils/API";
import "./style.css";
import { Input, TextArea, FormBtn } from "../components/Form";
import SearchedBook from "../components/SearchedBook";
import SavedBook from "../components/SavedBook";

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
    this.resetBooks();
  }

  // load saved books on component
  componentDidUpdate() {
    this.loadBooks();
  }
  // load all saved books, reset the title/author/synopsis state
  resetBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          savedBooks: res.data,
          searchedBooks: [],
          searchTitle: ""
        })
      )
      .catch(err => console.log(err));
  };

  loadBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          savedBooks: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // code to search google database
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //handle search event, searching by book title only
  handleSearchEvent = event => {
    event.preventDefault();
    const bookTitle = this.state.searchTitle;
    API.searchBook(bookTitle)
      .then(response => {
        let array = [];
        response.data.items.forEach(book => {
          console.log(book);
          array.push(book);
        });
        console.log(`this is going into searchedBooks state : ${array}`);
        this.setState({ searchedBooks: array });
      })
      .catch(err => console.log(err));
  };

  // handle save event, passing ID from props
  handleSaveEvent = bookId => {
    let bookObj;
    this.state.searchedBooks.filter(book =>
      book.id === bookId
        ? (bookObj = book)
        : console.log(`hey, couldn't find ID`)
    );

    const bookData = {
      bookId: bookObj.id,
      title: bookObj.volumeInfo.title,
      authors: bookObj.volumeInfo.authors
        ? bookObj.volumeInfo.authors
        : "no authors",
      description: bookObj.volumeInfo.description
        ? bookObj.volumeInfo.description
        : "no description",
      ISBN: bookObj.volumeInfo.industryIdentifiers
        ? bookObj.volumeInfo.industryIdentifiers[0].identifier
        : "no isbn",
      imageLink: bookObj.volumeInfo.imageLinks
        ? bookObj.volumeInfo.imageLinks.thumbnail
        : noBookImage
    };

    API.saveBook(bookData)
      .then(res => console.log(res))
      .catch(err => console.log(err));

    // componentDidUpdate above should reload books
  };

  handleDelete = bookId => {
    console.log(`this books id is ${bookId}`);
    API.deleteBook(bookId)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form>
          <Input
            name="searchTitle"
            placeholder="Title (required)"
            onChange={this.handleInputChange}
          />
          <FormBtn onClick={this.handleSearchEvent}>Search for Book</FormBtn>
        </form>
        <div className="searchedBooks">
          <h2>Search Results</h2>
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
        </div>
        <div className="savedBooks">
          <h2>Saved Books</h2>

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
        </div>
      </div>
    );
  }
}

export default Books;
