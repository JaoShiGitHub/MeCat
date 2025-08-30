import { pool } from "../utils/db.js";

const getBlogs = async (req, res) => {
  const data = await pool.query(`SELECT * FROM blogs`);

  if (data.rows.length === 0) {
    return res.status(404).json({ success: false, message: "Blogs not found" });
  }

  const blogs = data.rows;

  return res.status(200).json({ success: true, blogs });
};

const getMyBlogs = async (req, res) => {
  const { id } = req.user;
  const data = await pool.query(`SELECT * FROM blogs WHERE user_id = $1`, [id]);

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
    `INSERT INTO blogs (user_id, title, content, posted_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW())`,
    [id, title, content]
  );

  return res.status(201).json({ success: true, message: "Blog created" });
};

export { getBlogs, getMyBlogs, createBlog };
