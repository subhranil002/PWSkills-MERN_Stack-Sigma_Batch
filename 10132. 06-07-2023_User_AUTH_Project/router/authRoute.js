const express = require("express");
const authRouter = express.Router();
const {
    signup,
    signin,
    getUser,
    logout,
} = require("../controller/authController.js");
const jwtAuth = require("../middleware/jwtAuth.js");

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.get("/user", jwtAuth, getUser);
authRouter.get("/logout", jwtAuth, logout);

module.exports = authRouter;
