import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, TypeScript!");
});

export default app;
