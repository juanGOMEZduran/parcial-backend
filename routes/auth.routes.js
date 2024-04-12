
import { Router } from "express";
import { login } from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.use("/", login);
export default authRouter;