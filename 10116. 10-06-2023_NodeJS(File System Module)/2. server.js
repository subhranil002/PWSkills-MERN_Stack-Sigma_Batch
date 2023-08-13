const fs = require("fs");

// Create File

const text = "Hello from Subhranil";
console.log("Creating a new file");
fs.writeFileSync("3. index.txt", text);
console.log("File created successfully");

// Creating a new file
// File created successfully

// Read File

console.log("Read Start");

fs.readFile("3. input.txt", function (err, data) {
    if (err) {
        console.log("Error:", err);
        return err;
    }
    console.log("Data:", data.toString());
    console.log("Read End");
    return data;
});

console.log("Other Stuff");

// Read Start
// Other Stuff
// Data: Hello from Subhranil
// Read End

console.log("Read Start");
let data = fs.readFileSync("3. input.txt");
console.log("Data:", data.toString());
console.log("Read End");
console.log("Other Stuff");

// Read Start
// Data: Hello from Subhranil
// Read End
// Other Stuff

const buff = new Buffer(1024);

fs.open("3. input.txt", "r+", function (err, fd) {
    if (err) {
        console.log("Error in opening file");
    }
    console.log("File opened successfully");

    fs.read(fd, buff, 0, buff.length, 0, function (er, bytes) {
        if (er) {
            console.log("Error in reading file");
        }
        console.log("Bytes:", bytes);
        console.log("Data:", buff.slice(0).toString());
        fs.close(fd, function (err) {
            if (err) {
                console.log("Error in closing file");
            }
            console.log("Success in closing file");
        });
    });
});

// (node:10560) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
// (Use `node --trace-deprecation ...` to show where the warning was created)
// File opened successfully
// Bytes: 20
// Data: Hello from Subhranil

// Write File

fs.writeFile("3. input.txt", "pw skills", function (err, data) {
    if (err) {
        console.log("Error in writing file");
    }
    console.log("Success in writing file");
});

// Success in writing file

fs.appendFile("3. input.txt", "--- Subhranil", "utf8", function (err, data) {
    if (err) {
        console.log("Error in appending file");
    }
    console.log("Success in appending file");
});

// Success in appending file

// Deleting File

fs.unlink("3. input.txt", function (err) {
    if (err) {
        console.log("Error in deleting file");
    }
    console.log("Success in deleting file");
});

// Success in deleting file
