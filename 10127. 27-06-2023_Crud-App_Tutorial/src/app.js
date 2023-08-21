require("dotenv").config();
const express = require("express");
const app = express();
const connectToDB = require("../config/db.js");
const cors = require("cors");
const userRoutes = require("../routes/userRoutes.js");

// Express middleware
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors());

// init connection to DB
connectToDB();

app.use("/", userRoutes);

module.exports = app;
