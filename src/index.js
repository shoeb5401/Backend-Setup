import dotenv from "dotenv";

import express from "express";
import connectDB from "./db/dbConnect.js";
const port = process.env.PORT;
// console.log(`${process.env.MONGODB_URI}`);
const app = express();
dotenv.config({
  path: "./.env",
});
connectDB();

app.listen(port, () => {
  console.log(`App is listening at: http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("You are at Root and Your server is up and running");
});
