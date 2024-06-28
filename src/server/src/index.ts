import express from "express";
import { userRouter, propertyRouter } from "./routes";
import { connect, isAlive } from "./utils/db";

async function setup() {
  const app = express();
  await connect();

  app.use(express.json());
  app.get("/stats", (req, res) => {
    const value = isAlive();
    res.json({ dbConnection: value });
  });

  app.use('/properties', propertyRouter);
  app.use("/users", userRouter);
  return app;
}

export default setup;
