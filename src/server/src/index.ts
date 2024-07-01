import express, {NextFunction, Request, Response} from "express";
import { userRouter, propertyRouter } from "./routes";
import { connect, isAlive } from "./utils/db";
import cors from 'cors';
import authRouter from "./routes/auth.routes";

async function setup() {
  const app = express();
  await connect();
  
  app.use(cors());
  app.use(express.json());
  app.get("/stats", (req, res) => {
    const value = isAlive();
    res.json({ dbConnection: value });
  });

  app.use('/properties', propertyRouter);
  app.use("/users", userRouter);
  app.use("/api/auth", authRouter)
  app.use((err: any, req: Request, res:Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500
    const message = err. message || "Internal Server Error"
    return res.status(statusCode).json({
      success: false,
      statusCode, message
    })
  })
  return app;
}

export default setup;
