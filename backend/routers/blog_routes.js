import { Router } from "express";
import authUser from "../middlewares/auth";
import {
  createBlog,
  editBlog,
  getBlogs,
  getMyBlogs,
} from "../controllers/blog_controller";

const blogRouter = Router();

blogRouter.get("/", authUser, getBlogs);
blogRouter.get("/me", authUser, getMyBlogs);
blogRouter.post("/", authUser, createBlog);
blogRouter.put("/:blog_id", authUser, editBlog);
blogRouter.delete("/:blog_id", authUser);

export default blogRouter;
