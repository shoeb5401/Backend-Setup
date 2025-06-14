import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
//@ To setup/configure or to use middleware, we use app.use()
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// For json exceptance
app.use(
  express.json({
    limit: "32kb",
  })
);

// For url encoding
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);
// For file handling
app.use(express.static("./public"));

// For parsing/handling the cookies
app.use(cookieParser());

//@ Routes imports
import userRouter from "./routes/user.route.js";

//@ Route declaration
app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users/...

export { app };
