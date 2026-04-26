import { setDefaultResultOrder } from "dns";
setDefaultResultOrder("ipv4first");
import dotenv from "dotenv";
dotenv.config();   // 🔥 MUST BE FIRST

import connectDB from "./db/index.js";

console.log("ENV CHECK:", process.env.MONGO_URI); // debug

connectDB();




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


