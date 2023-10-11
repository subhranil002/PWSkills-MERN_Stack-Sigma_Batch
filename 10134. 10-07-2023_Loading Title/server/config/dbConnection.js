import mongoose from "mongoose";
import { config } from "dotenv";
config();

mongoose.set("strictQuery", false);

const connectionToDb = async () => {
    await mongoose
        .connect(process.env.MONGO_URI)
        .then((data) => {
            console.log(`Connected to DB: ${data.connection.host}`);
        })
        .catch((error) => {
            console.log(error.message);
        });
};

export default connectionToDb;
