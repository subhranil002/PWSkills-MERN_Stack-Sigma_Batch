const express = require("express");
const app = express();
const path = require("path");
require("../config/databaseConfig.js");
const userRoute = require("../router/userRoute.js");
const cookieParser = require("cookie-parser");

const staticPath = path.join(__dirname, "../../client");
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", staticPath + "/views");

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(cookieParser());

app.use("/", userRoute);

module.exports = app;
