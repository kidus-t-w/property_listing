import app from "./src/index";

const port = 1337;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });