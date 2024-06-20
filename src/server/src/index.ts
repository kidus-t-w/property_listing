import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

export default app;
