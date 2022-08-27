import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (request, response) => {
  return response.json({
    message: "Hello World!",
  });
});

app.listen(process.env.APP_PORT, () => console.log("Server is running! 🚀"));
