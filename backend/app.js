import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
// Routers
import authRouter from "./routers/auth_routes";
import blogRouter from "./routers/blog_routes";

const app = express();
const port = 5000;

dotenv.config();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("auth", authRouter);
app.use("blogs", blogRouter);

app.listen(port, () => {
  console.log(`Sever is running on port ${port}`);
});
