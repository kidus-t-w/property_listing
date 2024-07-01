import { Router } from "express";
import { signup } from "../controllers/auth.controller";
import { createUserHandler } from "../controllers/users.controller";

const authRouter = Router();

authRouter.post("/signup", createUserHandler);

export default authRouter;
