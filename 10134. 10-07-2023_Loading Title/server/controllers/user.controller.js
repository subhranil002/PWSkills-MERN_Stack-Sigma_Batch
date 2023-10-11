import User from "../models/user.model.js";
import AppError from "../utils/error.util.js";

const cookieOptions = {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true,
};

const register = async (req, res, next) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return next(new AppError("All fields are required", 400));
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            return next(new AppError("Email already exists", 400));
        }

        const user = await User.create({
            fullName,
            email,
            password,
            avtar: {
                public_id: email,
                secure_url:
                    "https://res.cloudinary.com/du9jzqlpt/image/upload/v1674647316/avatar_drzgxv.jpg",
            },
        });

        if (!user) {
            return next(
                new AppError("User registration failed, please try again", 400)
            );
        }

        const token = await user;

        res.cookie("token", token, cookieOptions);

        await user.save();

        user.password = undefined;

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        return next(new AppError(error.message, 500));
    }
};
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new AppError("All fields are required", 400));
        }

        const user = await User.findOne({ email }).select("+password");

        if (!user || !(user.comparePassword(password))) {
            return next(new AppError("Email or Password does not match", 400));
        }

        const token = await user.generateJWTToken();

        user.password = undefined;

        res.cookie("token", token, cookieOptions);

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user,
        });
    } catch (error) {
        return next(new AppError(error.message, 500));
    }
};
const logout = (req, res) => {
    res.cookie("token", null, {
        secure: true,
        maxAge: 0,
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "User logged out successfully",
    });
};
const getProfile = async (req, res, next) => {
    try {
        const userId = req.user.id;

        const user = await User.findById(userId);

        res.status(200).json({
            success: true,
            message: "User details",
            user,
        });
    } catch (error) {
        return next(new AppError("Failed to fetch user details", 400));
    }
};

export { register, login, logout, getProfile };
