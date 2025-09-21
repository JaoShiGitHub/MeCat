import { pool } from "../../utils/db.js";

// GET
const getCommentsByBlogId = async (req, res) => {};

const getRepliesByCommentId = async (req, res) => {};

// POST
const postComment = async (req, res) => {};

const postReply = async (req, res) => {};

// PATCH
const editComment = async (req, res) => {};

const editReply = async (req, res) => {};

// DELETE
const deleteCommentById = async (req, res) => {};

const deleteReplyById = async (req, res) => {};

export {
  getCommentsByBlogId,
  getRepliesByCommentId,
  postComment,
  postReply,
  editComment,
  editReply,
  deleteCommentById,
  deleteReplyById,
};
