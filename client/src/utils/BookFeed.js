import io from "socket.io-client";
const socket = io();

function subscribeToBookFeed(cb) {
  socket.on("bookFeed", sendFeed => cb(null, sendFeed));
  socket.emit("subscribeToBookFeed", 500);

  //   socket.on("hello", ({ message }) => alert(message));
}
export { subscribeToBookFeed };
