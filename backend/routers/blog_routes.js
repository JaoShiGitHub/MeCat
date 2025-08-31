import { Router } from "express";
import authUser from "../middlewares/auth.js";
import {
  getBlog,
  getBlogs,
  getMyBlogs,
  createBlog,
  editBlog,
  deleteBlog,
} from "../controllers/blog_controller.js";

const blogRouter = Router();

blogRouter.get("/:blogId", authUser, getBlog);
blogRouter.get("/", authUser, getBlogs);
blogRouter.get("/me", authUser, getMyBlogs);
blogRouter.post("/", authUser, createBlog);
blogRouter.put("/:blogId", authUser, editBlog);
blogRouter.delete("/:blogId", authUser, deleteBlog);

export default blogRouter;
