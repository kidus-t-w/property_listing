import cors from 'cors'
import authRouter from './routes/auth.routes'
import { connect, isAlive } from './utils/db'
import deserializeUser from './middlewares/deserializeUser'
import express, { NextFunction, Request, Response } from 'express'
import { propertyRouter, userRouter, sessionRouter } from './routes'

async function setup() {
  const app = express();
  await connect();
  
  app.use(cors());
  app.use(express.json());
  app.use(deserializeUser)
  
  app.get("/stats", (req, res) => {
    const value = isAlive();
    res.json({ dbConnection: value });
  });

  app.use("/api/auth", authRouter)
  app.use('/api/users', userRouter)
  app.use('/api/sessions', sessionRouter)
  app.use('/api/property', propertyRouter)
  
  // TODO: Explain to me what this middleware does exactly
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
