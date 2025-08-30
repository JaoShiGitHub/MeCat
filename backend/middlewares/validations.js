import { validateEmail, validateRequiredFields } from "../utils/common.js";
import { pool } from "../utils/db.js";

// REGISTER

const validateRegisterInput = (req, res, next) => {
  const { username, email, password } = req.body;

  if (!validateRequiredFields({ username, email, password }, res)) return;

  if (!validateEmail(email, res)) return;

  if (username.length < 4 || username.length > 20) {
    return res.status(400).json({
      success: false,
      message: "Username must be between 4 and 20 characters",
    });
  }

  if (password.length < 8) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 8 characters long",
    });
  }

  next();
};

const checkUserEmailConflict = async (req, res, next) => {
  const { email } = req.body;

  const data = await pool.query(`SELECT * FROM users WHERE email = $1`, [
    email,
  ]);

  const userEmail = data.rows[0];

  if (userEmail) {
    return res
      .status(409)
      .json({ success: false, message: "This email is already registered" });
  }

  next();
};

// LOGIN

const validateLoginInput = (req, res, next) => {
  const { email, password } = req.body;

  if (!validateRequiredFields({ email, password }, res)) return;
  if (!validateEmail(email, res)) return;

  next();
};

export { validateLoginInput, validateRegisterInput, checkUserEmailConflict };
