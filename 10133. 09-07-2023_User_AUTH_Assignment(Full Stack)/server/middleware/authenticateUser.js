const JWT = require("jsonwebtoken");
require("dotenv").config();

const authenticateUser = (req, res, next) => {
    const token = (req.cookies && req.cookies.token) || null;

    if (!token) {
        return res.status(400).json({
            success: false,
            message: "Not Authorized",
        });
    }

    try {
        const payload = JWT.verify(token, process.env.SECRET);

        req.user = {
            id: payload.id,
            username: payload.username,
            bio: payload.bio,
            email: payload.email,
        };
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }

    next();
};

module.exports = authenticateUser;
