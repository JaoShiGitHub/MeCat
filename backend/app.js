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
const port = 4000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/auth", authRouter);
app.use("/blogs", blogRouter);

const httpSever = createServer(app);
const io = new Server(httpSever, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("newComment", (data) => {
    io.emit("receiveComment", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Older style (before v3 of socket.io): io.listen(4000);
// Modern style:
httpSever.listen(port, () => {
  console.log(`Sever is running on port ${port}`);
});
