import app from "./app.js";
import connectionToDb from "../config/dbConnection.js";
connectionToDb();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
