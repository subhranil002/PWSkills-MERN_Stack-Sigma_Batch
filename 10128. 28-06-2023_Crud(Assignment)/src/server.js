const app = require("./app.js");

// Get PORT
const port = process.env.PORT || 5000;

// Start The Server
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
