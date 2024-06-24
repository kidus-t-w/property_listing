import express from "express";
import { userRouter } from "./routes";

const app = express();

app.use('/users', userRouter)

export default app;
