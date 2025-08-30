import { Router } from "express";

const blogRouter = Router();

blogRouter.get("/");
blogRouter.get("/me");
blogRouter.post("/");
blogRouter.put("/:blog_id");
blogRouter.delete("/:blog_id");

export default blogRouter;
