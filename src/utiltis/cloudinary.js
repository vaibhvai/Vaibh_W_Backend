import { v2 as cloudinary } from "cloudinary";

import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localeFilepPath) => {
  try {
    if (!localeFilepPath) return null;
    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localeFilepPath, {
      resource_type: "auto",
    });
    //file has been upload sucessfully!!
    console.log("file has been upload sucessfully!!", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localeFilepPath); //delete file from local storage
    console.error("Error uploading file to Cloudinary:", error);
    return null;
  }
};

export { uploadOnCloudinary };
