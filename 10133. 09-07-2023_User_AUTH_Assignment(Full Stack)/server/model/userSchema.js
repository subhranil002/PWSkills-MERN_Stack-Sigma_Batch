const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
require("dotenv").config();

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is Required"],
            trim: true,
        },
        username: {
            type: String,
            required: [true, "Username is Required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is Required"],
            unique: [true, "Email is already registered"],
            trim: true,
        },
        password: {
            type: String,
            required: [true, "Password is Required"],
            trim: true,
        },
        bio: {
            type: String,
            trim: true,
        },
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next;
    }
    this.password = await bcrypt.hash(this.password, 10);
    return next;
});

userSchema.methods = {
    jwtToken() {
        return JWT.sign(
            {
                id: this._id,
                username: this.username,
                bio: this.bio,
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
