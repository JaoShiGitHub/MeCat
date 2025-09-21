import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import { Server } from "socket.io";
// Routers
import authRouter from "./routers/auth-routes.js";
import blogRouter from "./routers/blog-routes.js";

const app = express();
const PORT = 4000;
const SOCKET_PORT = 5000;
const server = createServer(app);

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

app.use("/auth", authRouter);
app.use("/blogs", blogRouter(io));

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(SOCKET_PORT, () =>
  console.log(`Socket.io is running on port ${SOCKET_PORT}`)
);

app.listen(PORT, () => console.log(`Sever is running on port ${PORT}`));
