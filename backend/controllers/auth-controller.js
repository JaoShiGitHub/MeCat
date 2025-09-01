import { pool } from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// REGISTER
const register = async (req, res) => {
  const { username, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  await pool.query(
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
    [username, email, hashedPassword]
  );

  return res
    .status(201)
    .json({ success: true, message: "Account has been created" });
};

// LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;

  const data = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  const userData = data.rows[0];

  if (!userData) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  const isValidPassword = bcrypt.compare(password, userData.password);

  if (!isValidPassword) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid password" });
  }

  const token = jwt.sign(
    {
      id: userData.user_id,
      username: userData.username,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
    maxAge: 24 * 60 * 60 * 1000,
  });

  const user = { id: userData.user_id, username: userData.username };

  return res
    .status(200)
    .json({ success: true, message: "Logged in successfully.", user });
};

// LOGOUT
const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
  });
  res.status(200).json({ success: true, message: "Logged out successfully" });
};

// CHECK LOGIN USER

const isLoggedIn = (req, res) => {
  if (!req.user) {
    return res
      .status(401)
      .json({ success: false, message: "User is not logged in" });
  }

  const user = req.user;

  return res
    .status(200)
    .json({ success: true, message: "User is logged in", user });
};

export { register, login, logout, isLoggedIn };
