import { Router } from "express";
import {
  createUserHandler,
  deleteUserHandler,
  getCurrentUserHandler,
  getUserHandler,
  getUsersHandler,
  getUsersPropertiesHandler,
  updateCurrentUserHandler,
  updateUserHandler,
} from "../controllers/users.controller";
import validateResource from "../utils/validateResource";
import {
  createUserSchema,
  deleteUserSchema,
  getUserPropertiesSchema,
  getUserSchema,
  updateUserSchema,
} from "../schemas/user.schema";
import requireUser from "../middlewares/requireUser";

const userRouter = Router();

userRouter.get("/", getUsersHandler);
userRouter.get("/me", requireUser, getCurrentUserHandler);
userRouter.get("/properties", requireUser, getUsersPropertiesHandler);
userRouter.get("/:id", validateResource(getUserSchema), getUserHandler);
userRouter.post("/", validateResource(createUserSchema), createUserHandler);
userRouter.put("/me", requireUser, validateResource(updateUserSchema), updateCurrentUserHandler); // New route
userRouter.put("/:id", validateResource(updateUserSchema), updateUserHandler);
userRouter.delete(
  "/:id",
  validateResource(deleteUserSchema),
  deleteUserHandler
);

export default userRouter;
