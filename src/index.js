import "dotenv/config";
import { setDefaultResultOrder } from "dns";
setDefaultResultOrder("ipv4first");

import connectDB from "./db/index.js";
import app from "./app.js";

console.log("ENV CHECK:", process.env.MONGO_URI); // debug

connectDB()
  .then(() => {
    console.log("DB Connected Successfully vaibhavi");
    app.listen(process.env.PORT || 8003, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB Connection Error:", err);
  });

/*
import  express from "express";

const app = express();
(async () => {
    try {
      await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

      app.on("error", (err) => {
        console.log("ERROR", err);
        throw err;
      });

      app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });
    } catch (error) {
        console.log( "ERROR",error);
        throw error;
    }
})()
*/
