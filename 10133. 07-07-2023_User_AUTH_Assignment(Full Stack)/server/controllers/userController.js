const app = require("../src/app.js");
const userModel = require("../model/userSchema.js");
const bcrypt = require("bcrypt");

exports.signup = async (req, res, next) => {
    try {
        const userInfo = userModel(req.body);

        await userInfo.save();
        return res.status(200).redirect("/login");
    } catch (error) {
        if (error.code == 11000) {
            return res.status(400).json({
                success: false,
                message: "Account already exists with same email id",
            });
        }

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.login = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const user = await userModel
            .findOne({
                username,
            })
            .select("+password");

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        const token = user.jwtToken();

        const cookieOption = {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
        };

        res.cookie("token", token, cookieOption);
        return res.status(200).redirect("/");
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.user = async (req, res, next) => {
    const userId = req.user.id;

    try {
        const user = await userModel.findById(userId);

        if (!user) {
            res.status(400).json({
                success: false,
                message: "User not found",
            });
        }

        return res.render("user", {
            username: user.username,
            bio: user.bio,
            email: user.email,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
