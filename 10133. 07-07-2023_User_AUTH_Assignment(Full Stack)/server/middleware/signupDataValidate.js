const emailValidator = require("email-validator");

const signupDataValidate = (req, res, next) => {
    const { name, username, email, password, bio } = req.body;

    if (!name || !username || !email || !password) {
        res.status(400).json({
            success: false,
            message: "Every field is required",
        });
    }

    const validEmail = emailValidator.validate(email);

    if (!validEmail) {
        res.status(400).json({
            success: false,
            message: "Try to use a valid Email",
        });
    }

    next();
};

module.exports = signupDataValidate;
