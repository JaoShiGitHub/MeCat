import { Router } from "express";
import authUser from "../middlewares/auth.js";
import {
  getBlog,
  getBlogs,
  getMyBlogs,
  createBlog,
  editBlog,
  deleteBlog,
} from "../controllers/blog-controller.js";

import {
  getCommentsByBlogId,
  getRepliesByCommentId,
  postComment,
  postReply,
  editComment,
  editReply,
  deleteCommentById,
  deleteReplyById,
} from "../apps/comment/comment.controller.js";

function blogRouter(io) {
  const router = Router();

  router.get("/", authUser, getBlogs);
  router.get("/me", authUser, getMyBlogs);
  router.post("/", authUser, createBlog);
  router.get("/:blogId", authUser, getBlog);
  router.put("/:blogId", authUser, editBlog);
  router.delete("/:blogId", authUser, deleteBlog);

  // COMMENT SYSTEM
  router.get("/:blogId/comments", authUser);
  router.get("/:blogId/comments/:commentId/replies", authUser);

  router.post("/:blogId/comments", authUser);
  router.post("/:blogId/comments/:commentId/replies", authUser);

  router.patch("/:blogId/comments/:commentId", authUser);
  router.patch("/:blogId/comments/:commentId/replies/:replyId", authUser);

  router.delete("/:blogId/comments/:commentId", authUser);
  router.delete("/:blogId/comments/:commentId/replies/:replyId", authUser);
  return router;
}

export default blogRouter;
