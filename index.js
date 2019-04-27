const app = require("express")();
const port = 1234;

const server = app.listen(port, () => {
  console.log(`\n*** Server running on http://localhost:${port} ***\n`);
});

const io = require("socket.io")(server);

io.on("connection", socket => {
  socket.on("send", data => {
    console.log("EMITTING TO CLIENT:", data);
    io.emit("receive", data);
  });
});
