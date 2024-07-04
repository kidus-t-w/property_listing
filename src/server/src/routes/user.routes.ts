import { Router } from "express";
import {
  createUserHandler,
  deleteUserHandler,
  getUserHandler,
  getUsersHandler,
  getUsersPropertiesHandler,
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
userRouter.get("/:id", validateResource(getUserSchema), getUserHandler);
userRouter.get(
  "/properties",
  requireUser,
  getUsersPropertiesHandler
);
userRouter.post("/", validateResource(createUserSchema), createUserHandler);
userRouter.put("/:id", validateResource(updateUserSchema), updateUserHandler);
userRouter.delete(
  "/:id",
  validateResource(deleteUserSchema),
  deleteUserHandler
);

export default userRouter;
