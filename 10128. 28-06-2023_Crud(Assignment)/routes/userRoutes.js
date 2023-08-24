// Import Express
const express = require("express");
// Import Controllers
const { login, register } = require("../controllers/userController.js");

// Create a instance for router
const router = express.Router();

// Create Routes
router.post("/login", login);
router.post("/register", register);

module.exports = router;
