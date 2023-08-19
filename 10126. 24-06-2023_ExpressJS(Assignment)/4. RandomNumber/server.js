const express = require("express");
const app = express();

const hostname = "localhost";
const PORT = 3000;

app.get("/random", (req, res) => {
    res.json({ random: Math.floor(Math.random() * 10) });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${hostname}:${PORT}/random`);
});
