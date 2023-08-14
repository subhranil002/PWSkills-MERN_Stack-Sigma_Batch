const fs = require("fs");

const data =
    "Node.js is an open-source, server-side JavaScript runtime that allows developers to build and execute server-side applications using JavaScript. It's built on the V8 JavaScript engine developed by Google and provides an event-driven, non-blocking I/O model that makes it suitable for building scalable and efficient network applications.Node.js's architecture enables developers to build scalable and performant applications, especially in scenarios where high concurrency and real-time communication are important. It's commonly used for web servers, APIs, real-time applications, microservices, and more.";

fs.writeFileSync("nodejs_architecture.txt", data);
