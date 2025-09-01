import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
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

app.listen(port, () => {
  console.log(`Sever is running on port ${port}`);
});
