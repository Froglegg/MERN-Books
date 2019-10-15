import axios from "axios";

export default {
  // Gets all books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  searchBook: function(bookTitle) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=10`
    );
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
