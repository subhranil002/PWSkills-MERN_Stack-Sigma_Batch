import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
import crypto from "crypto";

const userSchema = new Schema(
    {
        fullName: {
            type: "String",
            required: [true, "Name is required"],
            lowercase: true,
            trim: true,
        },
        email: {
            type: "String",
            required: [true, "Email is required"],
            lowercase: true,
            trim: true,
            unique: true,
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Please fill in a valid email address",
            ],
        },
        password: {
            type: "String",
            required: [true, "Password is required"],
            minLength: [8, "Password must be at least 8 characters"],
            select: false,
        },
        avtar: {
            public_id: {
                type: "String",
            },
            secure_url: {
                type: "String",
            },
        },
        role: {
            type: "String",
            enum: ["USER", "ADMIN"],
            default: "USER",
        },
        forgotPasswordToken: String,
        forgotPasswordExpiry: Date,
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods = {
    generateJWTToken: async function () {
        return await jwt.sign(
            {
                id: this._id,
                email: this.email,
                subscription: this.subscription,
                role: this.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRY,
            }
        );
    },
    comparePassword: async function (plainTextPassword) {
        return await bcrypt.compare(plainTextPassword, this.password);
    },
    generatePasswordResetToken: async function () {
        const resetToken = crypto.randomBytes(20).toString("hex");

        this.forgotPasswordToken = await crypto
            .createHash("sha256")
            .update(resetToken)
            .digest("hex");
        this.forgotPasswordExpiry = Date.now() + 15 * 60 * 1000;

        return resetToken;
    },
};

const User = model("user", userSchema);
export default User;
