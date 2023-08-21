const User = require("../models/user.schema.js");

exports.home = (req, res) => {
    res.send("Hello World");
};

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            throw new Error("Name and email are required");
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            throw new Error("User already exists");
        }

        const newUser = await User.create({
            name,
            email,
        });

        res.status(201).json({
            success: true,
            message: "User Created Successfully",
            newUser,
        });
    } catch (error) {
        console.log(error);

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({});

        res.status(201).json({
            success: true,
            users,
        });
    } catch (error) {
        console.log(error);

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

exports.editUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(201).json({
            success: true,
            message: "User Updated Successfully"
        });
    } catch (error) {
        console.log(error);

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        await User.findByIdAndDelete(userId);
        res.status(201).json({
            success: true,
            message: "User Deleted Successfully",
        });
    } catch (error) {
        console.log(error);

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
