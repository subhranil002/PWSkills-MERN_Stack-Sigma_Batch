const User = require("../models/user.schema.js");

// Login
exports.login = async (req, res) => {
    try {
        // Get Email & Password
        const { email, password } = await req.body;

        // Check if void
        if (!email || !password) {
            console.log("Email or Password cannot be void");
            res.status(401).json({ msg: "All input fields are required" });
        } else {
            // Email Validation
            const existingUser = await User.findOne({ email })
            if (existingUser) {
                // Password Validation
                if (existingUser.password === password) {
                    res.status(201).json({
                        msg: "User Login Successfully",
                    });
                } else {
                    console.log("Wrong Password");
                    res.status(404).json({
                        msg: "Password is wrong",
                    });
                }
            } else {
                console.log("Email not registered");
                res.status(404).json({
                    msg: "No accounts assosiate with this email",
                });
            }
        }
    } catch (error) {
        console.log(error.message);
        res.status(501).json({ msg: error.message });
    }
};

// Register
exports.register = async (req, res) => {
    try {
        // Get  Name, Email & Password
        const { name, email, password } = await req.body;

        // Check if void
        if (!name || !email || !password) {
            console.log("Name, Email or Password cannot be void");
            res.status(401).json({ msg: "All input fields are required" });
        } else {
            // Check if already registered
            if (await User.findOne({ email })) {
                console.log("Email already registered");
                res.status(401).json({ msg: "Email already registered" });
            } else {
                // Add Info To DB
                const newUser = await User.create({
                    name,
                    email,
                    password,
                });

                if (newUser) {
                    res.status(201).json({
                        msg: "User Registered Successfully",
                    });
                } else {
                    console.log("Error in adding user in DB");
                    res.status(401).json({ msg: "Error in adding user in DB" });
                }
            }
        }
    } catch (error) {
        console.log(error.message);
        res.status(501).json({ msg: error.message });
    }
};
