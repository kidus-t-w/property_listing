import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, TypeScript From Express!");
});

export default app;
