import jwt from "jsonwebtoken";

const authUser = () => {
  const { token } = req.cookies;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not authorized. Try login again" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded_token) => {
    if (error) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid or expired token" });
    }

    req.user = decoded_token;
    next();
  });
};

export default authUser;
