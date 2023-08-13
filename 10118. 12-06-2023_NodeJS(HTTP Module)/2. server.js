const http = require("http");

const server = http.createServer((request, response) => {
    if (request.url == "/") {
        response.write("<h1>Hello, Node.js</h1>");
    } else if (request.url == "/about") {
        response.write("<h1>About page</h1>");
    }
    response.end();
});

server.listen(5000);

console.log("The http server is running on port 5000"); // The http server is running on port 5000
 