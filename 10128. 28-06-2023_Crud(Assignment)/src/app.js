// Import Express
const express = require("express");
const app = express();
// Connect DB
const connectToDB = require("../config/db_connection.js");
// Get Environment Variables
require("dotenv").config();
// Import CORS
const cors = require("cors");
// Import Routes
const userRoutes = require("../routes/userRoutes.js");

// Middlewares
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors());

// Activate Routes
app.use("/", userRoutes);

module.exports = app;
