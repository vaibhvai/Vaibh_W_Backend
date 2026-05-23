import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
console.log("heello 1");
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);
console.log("heello 2");
app.use(
  express.json({
    limit: "20kb",
  }),
);
app.use(urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(cookieParser());
console.log("heello 3");
import userRoutes from "./routes/user.routes.js";
console.log("heello 4");
app.use("/api/v1/users", userRoutes);
console.log("heello 5");
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});
export default app;
