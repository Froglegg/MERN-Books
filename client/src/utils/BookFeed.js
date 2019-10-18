import openSocket from "socket.io-client";
const socket = openSocket("https://the-bookster.herokuapp.com");

function subscribeToBookFeed(cb) {
  socket.on("bookFeed", sendFeed => cb(null, sendFeed));
  socket.emit("subscribeToBookFeed", 500);
}
export { subscribeToBookFeed };

// router.get("/", (req, res) => {
//   socket.on("FromAPI", data => res.send({ response: data }));
// });

// module.exports = router;
