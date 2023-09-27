const mongoose = require("mongoose");
require("dotenv").config();

MONGO_URI = process.env.MONGO_URI;

(() => {
    mongoose
        .connect(MONGO_URI)
        .then((data) => {
            console.log(`Connected to DB: ${data.connection.host}`);
        })
        .catch((err) => {
            console.log(err.message);
        });
})();
