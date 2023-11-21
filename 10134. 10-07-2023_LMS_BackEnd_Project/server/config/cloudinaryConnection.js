import cloudinary from "cloudinary";
import { config } from "dotenv";
config();
import AppError from "../utils/error.util.js";

const connectToCloudinary = async () => {
    try {
        await cloudinary.v2.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });

        console.log("Connected to Cloudinary successfully!");
    } catch (error) {
        return new AppError(
            `Error connecting to Cloudinary: ${error.message}`,
            500
        );
    }
};

export default connectToCloudinary;
