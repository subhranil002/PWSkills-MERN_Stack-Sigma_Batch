const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        maxLength: [20, "Name should be within 20 characters"],
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"]
    }
});

module.exports = mongoose.model("User", userSchema);
