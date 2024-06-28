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
import { createUserSchema, updateUserSchema } from "../schemas/user.schema";

const userRouter = Router();
/**
 * Get users
 */
userRouter.get("/", getUsersHandler);
// userRouter.get("/me", getAuthenticatedUserHandler);

/**
 * Creates a new user
 */
userRouter.post("/", validateResource(createUserSchema), createUserHandler);

/**
 * Update a user
 */
userRouter.put("/:id", validateResource(updateUserSchema), updateUserHandler);

/**
 * Delete a user
 */
userRouter.delete("/:id", deleteUserHandler);

export default userRouter;
