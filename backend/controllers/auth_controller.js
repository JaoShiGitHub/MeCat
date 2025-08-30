import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// REGISTER
const register = async (req, res) => {
  const { username, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  await pool.query(
    `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`,
    [username, email, hashedPassword]
  );

  return res
    .status(201)
    .json({ success: true, message: "New user has been created" });
};

// LOGIN
const login = async () => {
  const { email, password } = req.body;

  const data = await pool.query(`SELECT * FROM users WHERE email = $1`, [
    email,
  ]);

  const user = data.rows[0];

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  const isValidPassword = bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid password" });
  }

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
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

  return res
    .status(200)
    .json({ success: true, message: "Logged in successfully." });
};

export { register, login };
