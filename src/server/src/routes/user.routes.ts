import { Router } from "express";
import {getUsersHandler} from '../controllers/users.controller'

const userRouter = Router();

userRouter.get('/', getUsersHandler)

export default userRouter;
