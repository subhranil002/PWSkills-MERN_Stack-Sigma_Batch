const http = require("http");

const hostname = "localhost";
const PORT = 3000;

function getProducts(count, category) {
    const products = [];
    for (let i = 1; i <= count; i++) {
        products.push({ id: i, name: `${category} product ${i}` });
    }
    return products;
}

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Wellcome to Men & Women Dummy Data");
    } else if (req.url == "/men") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(getProducts(10, "men")));
    } else if (req.url == "/women") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(getProducts(10, "women")));
    } else {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("page not found");
    }
});

server.listen(PORT, hostname, (err) => {
    if (err) {
        console.log("Error in listening");
    } else console.log(`Server is running on ${hostname}:${PORT}`);
});
