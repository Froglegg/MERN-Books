import io from "socket.io-client";
const socket = io();

function bookSaved(cb) {
  socket.on("bookSaved", sendBook => cb(null, sendBook));
  socket.emit("bookSaved");
}
export { bookSaved };
