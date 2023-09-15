require("dotenv").config()

const PORT = process.env.PORT;

const app = require("./app.js");

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
