import API from "./API";
import noBookImage from "../pages/noBookImage.jpg";

export default {
  // Gets all books
  resetBooks: function(state) {
    API.getSavedBooks()
      .then(res =>
        state.setState({
          savedBooks: res.data,
          searchedBooks: [],
          searchTitle: ""
        })
      )
      .catch(err => console.log(err));
  },

  loadBooks: function(state) {
    API.getSavedBooks()
      .then(res =>
        state.setState({
          savedBooks: res.data
        })
      )
      .catch(err => console.log(err));
  },

  handleSearchEvent: function(localState) {
    const bookTitle = localState.state.searchTitle;
    API.searchBook(bookTitle)
      .then(response => {
        let array = [];
        response.data.items.forEach(book => {
          console.log(book);
          array.push(book);
        });
        console.log(`this is going into searchedBooks state : ${array}`);
        localState.setState({ searchedBooks: array });
      })
      .catch(err => console.log(err));
  },

  handleSaveEvent: function(bookId, localState) {
    let bookObj;
    localState.state.searchedBooks.filter(book =>
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
  },

  handleDelete: function(bookId) {
    API.deleteBook(bookId)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
};
