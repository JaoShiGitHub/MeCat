import { Router } from "express";
// MIDDLEWARES
import {
  validateLoginInput,
  validateRegisterInput,
  checkUserEmailConflict,
} from "../middlewares/validations.js";
import authUser from "../middlewares/auth.js";
// CONTROLLERS
import { login, register } from "../controllers/auth_controller.js";

const authRouter = Router();

authRouter.post(
  "/register",
  [validateRegisterInput, checkUserEmailConflict],
  register
);
authRouter.post("/login", [validateLoginInput], login);
authRouter.post("/logout");
authRouter.post("/status", authUser);

export default authRouter;
