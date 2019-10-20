import API from "./API";
import noBookImage from "../pages/noBookImage.jpg";
export default {
  resetBooks: function(localState) {
    API.getSavedBooks()
      .then(res => {
        localState.setState({
          savedBooks: res.data,
          searchedBooks: [],
          searchTitle: ""
        });
      })
      .catch(err => console.log(err));
  },

  loadBooks: function(state) {
    API.getSavedBooks()
      .then(res => {
        state.setState({
          savedBooks: res.data
        });
      })
      .catch(err => console.log(err));
  },

  handleSearchEvent: function(localState, cb) {
    const bookTitle = localState.state.searchTitle;
    API.searchBook(bookTitle)
      .then(response => {
        let array = [];
        response.data.items.forEach(book => {
          array.push(book);
        });
        localState.setState({ searchedBooks: array });
        return cb();
      })
      .catch(err => console.log(err));
  },

  handleSaveEvent: function(bookId, localState, cb) {
    let bookObj;
    localState.state.searchedBooks.filter(book =>
      book.id === bookId ? (bookObj = book) : ""
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
        : noBookImage,
      infoLink: bookObj.volumeInfo.previewLink
        ? bookObj.volumeInfo.previewLink
        : "",
      rating: bookObj.volumeInfo.averageRating
        ? bookObj.volumeInfo.averageRating
        : 0
    };

    API.saveBook(bookData)
      .then(res => {
        return cb();
      })
      .catch(err => console.log(err));
  },

  handleDelete: function(bookId, cb) {
    API.deleteBook(bookId)
      .then(res => {
        return cb();
      })
      .catch(err => console.log(err));
  }
};
