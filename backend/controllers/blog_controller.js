import { pool } from "../utils/db.js";

const getBlogs = async (req, res) => {
  const data = await pool.query(`SELECT * FROM blogs`);

  if (data.rows.length === 0) {
    return res.status(404).json({ success: false, message: "Blogs not found" });
  }

  const blogs = data.rows;

  return res.status(200).json({ success: true, blogs });
};

export { getBlogs };
