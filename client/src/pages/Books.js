import React, { Component } from "react";
import axios from "axios";
import { Input, TextArea, FormBtn } from "../components/Form";
import Book from "../components/Book";

class Books extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: []
  };
  componentDidMount() {
    this.getBooks();
  }
  // Add code here to get all books from the database and save them to this.state.books
  getBooks = () => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
      .then(response => {
        let array = [];
        response.data.items.forEach(element => {
          console.log(element.volumeInfo.title);
          array.push(element.volumeInfo);
        });
        console.log(array);
        this.setState({ books: array });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form>
          <Input name="title" placeholder="Title (required)" />
          <FormBtn>Search for Book</FormBtn>
        </form>
        {this.state.books.map(book => (
          <Book
            title={book.title}
            author={book.author}
            description={book.description}
            key={book.id}
          />
        ))}
      </div>
    );
  }
}

export default Books;
