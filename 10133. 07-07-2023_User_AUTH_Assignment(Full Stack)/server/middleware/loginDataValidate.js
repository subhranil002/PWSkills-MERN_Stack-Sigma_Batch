const loginDataValidate = (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({
            success: false,
            message: "Every field is required",
        });
    }

    next();
};

module.exports = loginDataValidate;
