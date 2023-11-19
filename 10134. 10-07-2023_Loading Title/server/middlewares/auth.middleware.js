import AppError from "../utils/error.util.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.cookies.token;

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

const authorizedRoles = (...roles) => async (req, res, next) => {
    const currentUserRole = await req.user.role;

    if (!roles.includes(currentUserRole)) {
        return next(new AppError("Unauthorized!", 400));
    }

    next();
};

export { isLoggedIn, authorizedRoles };
