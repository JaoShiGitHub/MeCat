import { Router } from "express";
import authUser from "../middlewares/auth";
import { getBlogs, getMyBlogs } from "../controllers/blog_controller";

const blogRouter = Router();

blogRouter.get("/", authUser, getBlogs);
blogRouter.get("/me", authUser, getMyBlogs);
blogRouter.post("/", authUser);
blogRouter.put("/:blog_id", authUser);
blogRouter.delete("/:blog_id", authUser);

export default blogRouter;
