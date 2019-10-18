const express = require("express");
const path = require("path");
const routes = require("./routes");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 3001;

const axios = require("axios");
const mongoose = require("mongoose");

// const IOPORT = process.env.PORT || 8000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

//

io.on("connection", socket =>
  socket.emit("hello", { message: "hello from the server!" })
);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// const getApiAndEmit = async socket => {
//   try {
//     const res = await axios.get(`/api/books`, {
//       proxy: {
//         host: "127.0.0.1",
//         port: PORT
//       }
//     });
//     let array = res.data;
//     // let bookArray = [{}];
//     let newBook = array[0];
//     // array.forEach(el => bookArray.push(el));
//     // if no new book, then exit the function
//     if (!newBook) {
//       return;
//     } else {
//       socket.emit("bookFeed", newBook);
//     }
//   } catch (error) {
//     console.log(`Error is ${error.message} error id is ${error.id}`);
//   }
// };

// let interval;

// io.on("connection", socket => {
//   console.log("New client connected");
//   if (interval) {
//     clearInterval(interval);
//   }
//   socket.on("subscribeToBookFeed", interval => {
//     console.log("client is subscribing to bookfeed with interval ", interval);
//     setInterval(() => {
//       getApiAndEmit(socket);
//       // client.emit("bookFeed", res.data.items);
//     }, interval);
//   });
//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//   });
// });

// io.listen(IOPORT, (res, err) =>
//   console.log(
//     `res is ${res} and port is ${IOPORT}, if error the error is ${err}`
//   )
// );
