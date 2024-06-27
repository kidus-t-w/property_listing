import { Router } from "express";
import {
  getUsersHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
  getAuthenticatedUserHandler,
  getSingleUserHandler,
} from "../controllers/users.controller";
import validateResource from "../utils/validateResource";
import { createUserSchema } from "../schemas/user.schema";

const userRouter = Router();

userRouter.get("/", getUsersHandler);
// userRouter.get("/me", getAuthenticatedUserHandler);

/**
 * Creates a new user
 */
userRouter.post("/", validateResource(createUserSchema), createUserHandler);

userRouter.put("/", updateUserHandler);
userRouter.delete("/:id", deleteUserHandler);

export default userRouter;
