// Import neccessary libraries
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

require("dotenv/config");

//connects to database
require("./db");

const PORT = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

// Listening to socket events
io.on("connection", (socket) => {
  console.log("Connected: " + socket.id);

  socket.on("send-message", ({ message, room }) => {
    socket.to(room).emit("receive-message", message);
  });

  socket.on("request-appointment", ({ name, description, room }) => {
    console.log(name);
    socket.emit("receive-appointment", { name, description, room });
  });

  socket.on("reject-request", (room) => {
    socket.to(room).emit("cancel-request");
  });

  socket.on("success-payment", (room) => {
    socket.to(room).emit("navtigate-chatroom");
  });

  socket.on(
    "accept-request",
    ({ dr_forename, title, dr_surname, specialty, room }) => {
      socket
        .to(room)
        .emit("checkout", { dr_forename, title, dr_surname, specialty, room });
    }
  );

  socket.on("join-room", (room) => {
    socket.join(room);
  });
});

// Enable neccessary middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Api Home");
});

//route imports
// const chatRoutes = require("./routes/chat.routes");
// app.use("/", chatRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const checkoutRoutes = require("./routes/checkout");
app.use("/create-checkout-session", checkoutRoutes);

// Listen to the port
server.listen(PORT, () => console.log("Server is listening to port " + PORT));
module.exports = app;
