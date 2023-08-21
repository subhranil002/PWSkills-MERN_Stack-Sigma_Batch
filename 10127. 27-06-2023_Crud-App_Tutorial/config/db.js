const mongoose = require("mongoose");

const connectToDB = async () => {
    mongoose
        .connect(process.env.MONGO_URL)
        .then((conn) => {
            console.log(`Connected to DB : ${conn.connection.host}`);
        })
        .catch((err) => {
            console.log("Error : ", err);
            process.exit(1);
        });
};

module.exports = connectToDB;
