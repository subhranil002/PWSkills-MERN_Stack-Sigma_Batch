const express = require("express");
const app = express();
const authRouter = require("./router/authRoute.js");
const databaseconnect = require("./config/databaseConfig.js");
const cookieParser = require("cookie-parser");
databaseconnect();
const cors = require('cors');

app.use(cors)
app.use(express.json());
app.use(cookieParser())
app.use("/api/auth", authRouter);
app.use("/", (req, res) => {
    res.status(200).json({
        data: "JWTauthserver",
    });
});

module.exports = app;
