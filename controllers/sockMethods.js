const axios = require("axios");

// socket methods
module.exports = {
  getBookFeed: async (socket, port) => {
    try {
      const res = await axios.get(`/api/books`, {
        proxy: {
          // host: "127.0.0.1",
          port: port
        }
      });
      let array = res.data;
      let newBook = array[0];
      // if no new book, then exit the function
      if (!newBook) {
        return;
      } else {
        socket.emit("bookFeed", newBook);
      }
    } catch (error) {
      console.log(`Error is ${error.message} error id is ${error.id}`);
    }
  }
};
