import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
      //   upload the file on cloudinary
    } else {
      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      });
      //   file has been successfully uploaded.
      // console.log("File has been uploaded successfully", response.url);
      fs.unlinkSync(localFilePath);
      console.log("Response: ", response);
      return response;
    }
  } catch (error) {
    fs.unlinkSync(localFilePath); //@ Remove the locally saved Temp file as the upload operation got failed.
    return null;
  }
};

export { uploadOnCloudinary };
