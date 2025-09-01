import { Router } from "express";
// MIDDLEWARES
import {
  validateLoginInput,
  validateRegisterInput,
  checkUserEmailConflict,
} from "../middlewares/validations.js";
import authUser from "../middlewares/auth.js";
// CONTROLLERS
import {
  register,
  login,
  logout,
  isLoggedIn,
} from "../controllers/auth-controller.js";

const authRouter = Router();

authRouter.post(
  "/register",
  [validateRegisterInput, checkUserEmailConflict],
  register
);
authRouter.post("/login", [validateLoginInput], login);
authRouter.post("/logout", logout);
authRouter.get("/status", authUser, isLoggedIn);

export default authRouter;
