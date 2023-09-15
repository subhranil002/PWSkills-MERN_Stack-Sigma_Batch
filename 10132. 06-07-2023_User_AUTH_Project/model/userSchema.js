const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "User name is required"],
            minLength: [5, "User name must be at least 5 characters"],
            maxLength: [50, "User name must be less than 50 characters"],
            trim: true,
        },
        email: {
            type: String,
            require: [true, "User email is required"],
            unique: [true, "User already registered"],
            lowercase: true,
        },
        password: {
            type: String,
        },
        forgotPasswordToken: {
            type: String,
        },
        forgotPasswordExpiryDate: {
            type: Date,
        },
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    this.password = await bcrypt.hash(this.password, 10)
    return next();
});

userSchema.methods = {
    jwtToken() {
        return JWT.sign(
            {
                id: this._id,
                email: this.email,
            },
            process.env.SECRET,
            {
                expiresIn: "24h",
            }
        );
    },
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
