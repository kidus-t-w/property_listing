import { Router } from 'express'
import {
  createUserHandler,
  deleteUserHandler,
  getUserHandler,
  getUsersHandler,
  updateUserHandler
} from '../controllers/users.controller'
import validateResource from '../utils/validateResource'
import { createUserSchema, deleteUserSchema, getUserSchema, updateUserSchema } from '../schemas/user.schema'

const userRouter = Router();

userRouter.get("/", getUsersHandler);
userRouter.get('/:id', validateResource(getUserSchema), getUserHandler)
userRouter.post("/", validateResource(createUserSchema), createUserHandler);
userRouter.put("/:id", validateResource(updateUserSchema), updateUserHandler);
userRouter.delete('/:id', validateResource(deleteUserSchema), deleteUserHandler)

export default userRouter;
