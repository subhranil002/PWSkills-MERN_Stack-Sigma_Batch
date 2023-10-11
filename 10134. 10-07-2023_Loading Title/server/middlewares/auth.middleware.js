import AppError from "../utils/error.util.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const isLoggedIn = async (req, res, next) => {
    try {
        const token = (req.cookies && req.cookies.token) || null;

        if (!token) {
            return next(
                new AppError("Unauthenticated, please login again", 401)
            );
        }

        const userDetails = await jwt.verify(token, process.env.JWT_SECRET);

        req.user = userDetails;

        next();
    } catch (error) {
        return next(new AppError(error.message, 500));
    }
};

export default isLoggedIn;
