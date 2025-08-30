import { Router } from "express";
import {
  validateLoginInput,
  validateRegisterInput,
  checkUserEmailConflict,
} from "../middlewares/auth";

const authRouter = Router();

authRouter.post("/register", [validateRegisterInput, checkUserEmailConflict]);
authRouter.post("/login", [validateLoginInput]);
authRouter.post("/logout");
authRouter.post("/status");

export default authRouter;
