import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }) //to communicated with the only with our  frontend of the
);
app.use(
  express.json({
    limit: "16kb",
  }) //response as a json
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  }) //response as a file
);
app.use(express.static("public")); //for assests like images video fabicon etc
app.use(cookieParser());
export { app };
