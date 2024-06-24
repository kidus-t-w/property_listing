import { Router } from "express";

const userRouter = Router();

userRouter.get("/status", (req, res) => {
  console.log("/status");
  res.send('hello World')
});

export default userRouter;
