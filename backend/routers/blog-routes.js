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
  router.get("/:blogId/comments", authUser, getCommentsByBlogId);
  router.get(
    "/:blogId/comments/:commentId/replies",
    authUser,
    getRepliesByCommentId
  );

  router.post("/:blogId/comments", authUser, postComment);
  router.post("/:blogId/comments/:commentId/replies", authUser, postReply);

  router.patch("/:blogId/comments/:commentId", authUser, editComment);
  router.patch(
    "/:blogId/comments/:commentId/replies/:replyId",
    authUser,
    editReply
  );

  router.delete("/:blogId/comments/:commentId", authUser, deleteCommentById);
  router.delete(
    "/:blogId/comments/:commentId/replies/:replyId",
    authUser,
    deleteReplyById
  );
  return router;
}

export default blogRouter;
