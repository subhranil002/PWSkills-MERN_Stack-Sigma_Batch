const app = require("./app.js");
require("dotenv").config();
const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});