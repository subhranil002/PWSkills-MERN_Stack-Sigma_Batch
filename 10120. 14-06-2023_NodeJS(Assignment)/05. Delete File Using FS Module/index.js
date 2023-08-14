const fs = require("fs");

fs.unlink("./nodejs_architecture.txt", () =>
    console.log("File Deleted SuccessFully")
);
