import { Router } from "express";
import authUser from "../middlewares/auth.js";
import {
  getBlogs,
  getMyBlogs,
  createBlog,
  editBlog,
  deleteBlog,
} from "../controllers/blog_controller.js";

const blogRouter = Router();

blogRouter.get("/", authUser, getBlogs);
blogRouter.get("/me", authUser, getMyBlogs);
blogRouter.post("/", authUser, createBlog);
blogRouter.put("/:blog_id", authUser, editBlog);
blogRouter.delete("/:blog_id", authUser, deleteBlog);

export default blogRouter;
