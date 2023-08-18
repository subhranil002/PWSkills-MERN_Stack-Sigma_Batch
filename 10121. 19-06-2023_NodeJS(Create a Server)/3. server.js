const http = require("http");

const PORT = 3000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
    // Home Page
    // About Page
    // Contact Page
    // Product Page
    // Resr ... Error

    if (req.url == "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Wellcome to NodeJS server by Subhranil");
    } else if (req.url == "/about") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("About page");
    } else if (req.url == "/contact") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Contact page");
    } else if (req.url == "/product") {
        const options = {
            hostname: "fakestoreapi.com",
            path: "/products/1",
            method: "GET",
        };

        const apiReq = http.request(options, (apiRes) => {
            apiRes.on("data", (data) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.end(data.toString());
            });
        });

        apiReq.on("error", (e) => {
            console.log(e);
        });

        apiReq.end();
    } else {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Server error");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at ${hostname}:${PORT}`);
});
