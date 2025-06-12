import dotenv from "dotenv";

import { app } from "./app.js";
import connectDB from "./db/dbConnect.js";
const port = process.env.PORT;
// console.log(`${process.env.MONGODB_URI}`);

dotenv.config({
  path: "./.env",
});
//@ async-await gives a promise
connectDB()
  .then(() => {
    app.listen(port || 8000, () => {
      console.log(`App is listening at: http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!!");
  });

app.get("/", (req, res) => {
  res.send("You are at Root and Your server is up and running");
});
