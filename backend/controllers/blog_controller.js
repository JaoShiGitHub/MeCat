import { pool } from "../utils/db.js";

const getBlog = async (req, res) => {
  const { blogId } = req.params;

  const data = await pool.query(
    `SELECT blogs.*, users.username
     FROM blogs
     JOIN users ON blogs.user_id = users.user_id
     WHERE blogs.blog_id = $1`,
    [blogId]
  );

  if (data.rows.length === 0) {
    return res.status(404).json({ success: false, message: "Blog not found" });
  }

  const blog = data.rows[0];

  return res.status(200).json({ success: true, blog });
};

const getBlogs = async (req, res) => {
  const { search } = req.query;
  let query = "SELECT * FROM blogs";
  let params = [];

  if (search) {
    query += " WHERE title ILIKE $1 OR content ILIKE $1";
    params.push(`%${search}%`);
  }

  const data = await pool.query(query, params);

  if (data.rows.length === 0) {
    return res.status(404).json({ success: false, message: "Blogs not found" });
  }

  const blogs = data.rows;

  return res.status(200).json({ success: true, blogs });
};

const getMyBlogs = async (req, res) => {
  const { id } = req.user;
  const { search } = req.query;

  let query = "SELECT * FROM blogs WHERE user_id = $1";
  let params = [id];

  if (search) {
    query += " AND (title ILIKE $2 OR content ILIKE $2)";
    params.push(`%${search}%`);
  }

  const data = await pool.query(query, params);

  if (data.rows.length === 0) {
    return res.status(404).json({ success: false, message: "Blogs not found" });
  }

  const myBlogs = data.rows;

  return res.status(200).json({ success: true, myBlogs });
};

const createBlog = async (req, res) => {
  const { id } = req.user;
  const { title, content } = req.body;

  await pool.query(
    "INSERT INTO blogs (user_id, title, content, posted_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW())",
    [id, title, content]
  );

  return res.status(201).json({ success: true, message: "Blog created" });
};

const editBlog = async (req, res) => {
  const { blogId } = req.params;
  const { title, content } = req.body;

  await pool.query(
    "UPDATE blogs SET title = $1, content = $2, updated_at = NOW() WHERE blog_id = $3",
    [title, content, blogId]
  );

  return res
    .status(200)
    .json({ success: true, message: "Blog updated successfully" });
};

const deleteBlog = async (req, res) => {
  const { blogId } = req.params;

  const result = await pool.query("DELETE FROM blogs WHERE blog_id = $1", [
    blogId,
  ]);

  if (result.rowCount === 0) {
    return res.status(404).json({ success: false, message: "Blog not found" });
  }

  return res
    .status(200)
    .json({ success: true, message: "Blog deleted successfully" });
};

export { getBlog, getBlogs, getMyBlogs, createBlog, editBlog, deleteBlog };
