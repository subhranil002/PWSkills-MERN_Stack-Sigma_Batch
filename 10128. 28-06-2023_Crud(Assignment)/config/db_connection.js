const mongoose = require("mongoose");
require("dotenv").config();

(() => {
    mongoose
        .connect(process.env.MONGO_URL)
        .then((data) => {
            console.log(`Connected to DB :`, data.connection.host);
        })
        .catch((err) => {
            console.log("DB connection error: ", err.message);
        });
})();
