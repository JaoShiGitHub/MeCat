import { pool } from "../../utils/db.js";

// GET
const getCommentsByBlogId = async (req, res) => {
  const { blogId } = req.params;
  try {
    const data = await pool.query(`SELECT * FROM comments WHERE blog_id = $1`, [
      blogId,
    ]);
    const comments = data.rows;
    console.log(data.rows);

    return res.status(200).json({ success: true, comments });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const getRepliesByCommentId = async (req, res) => {
  const { commentId, blogId } = req.params;
  try {
    const data = await pool.query(
      `SELECT * FROM replies WHERE comment_id = $1 AND blog_id = $2`,
      [commentId, blogId]
    );
    const replies = data.rows;
    console.log(replies);

    return res.status(200).json({ success: true, replies });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

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
