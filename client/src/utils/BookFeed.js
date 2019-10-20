// book feed uses an interval to emit a request to the server, which responds with book Object.
import io from "socket.io-client";
const socket = io();

function subscribeToBookFeed(cb) {
  socket.on("bookFeed", sendFeed => cb(null, sendFeed));
  socket.emit("subscribeToBookFeed", 500);
}
export { subscribeToBookFeed };
