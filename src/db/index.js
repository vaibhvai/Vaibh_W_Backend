import mongoose from "mongoose";
import { DB_NAME } from "../utiltis/constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`,
    );
    console.log(
      `MONGODB CONNECTED !! DB HOST: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log(" MONGODB CONNECTION ERROR", error);
    process.exit(1);
    throw error;
  }
};

export default connectDB;
