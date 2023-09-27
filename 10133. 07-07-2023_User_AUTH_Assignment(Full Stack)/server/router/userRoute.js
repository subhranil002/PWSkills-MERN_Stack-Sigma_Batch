const express = require("express");
const userRoute = express.Router();
const { signup, login, user } = require("../controllers/userController.js");
const signupDataValidate = require("../middleware/signupDataValidate.js");
const loginDataValidate = require("../middleware/loginDataValidate.js");
const authenticateUser = require("../middleware/authenticateUser.js");

userRoute.get("/signup", (req, res) => {
    res.render("signup");
});
userRoute.get("/login", (req, res) => {
    res.render("login");
});
userRoute.post("/signup", signupDataValidate, signup);
userRoute.post("/login", loginDataValidate, login);
userRoute.get("/", authenticateUser, user);

module.exports = userRoute;
