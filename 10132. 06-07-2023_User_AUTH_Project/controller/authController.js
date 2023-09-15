const userModel = require("../model/userSchema.js");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");

exports.signup = async (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({
            success: false,
            message: "Every field is required",
        });
    }

    const validEmail = emailValidator.validate(email);
    if (!validEmail) {
        return res.status(400).json({
            success: false,
            message: "Please provide a valid email id",
        });
    }

    if (password != confirmPassword) {
        return res.status(400).json({
            success: false,
            message: "Password & Confirm Password doesn't match",
        });
    }

    try {
        const userInfo = userModel(req.body);
        const result = await userInfo.save();
        return res.status(200).json({
            success: true,
            data: result,
        });
    } catch (error) {
        if (error.code == 11000) {
            return res.status(400).json({
                success: false,
                message: "Account already exists with same email id",
            });
        }

        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

exports.signin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Every field is required",
        });
    }

    const validEmail = emailValidator.validate(email);
    if (!validEmail) {
        return res.status(400).json({
            success: false,
            message: "Please provide a valid email id",
        });
    }

    try {
        const user = await userModel
            .findOne({
                email,
            })
            .select("+password");

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        user.password = undefined;
        const token = user.jwtToken();

        const cookieOption = {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
        };

        res.cookie("token", token, cookieOption);

        return res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

exports.getUser = async (req, res) => {
    const userId = req.user.id;

    try {
        const user = await userModel.findById(userId);
        user.password = undefined;
        return res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

exports.logout = (req, res) => {
    try {
        const cookieOption = {
            expires: new Date(),
            httpOnly: true,
        };
        res.cookie("token", null, cookieOption);
        res.status(200).json({
            success: true,
            message: "Logged out",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
