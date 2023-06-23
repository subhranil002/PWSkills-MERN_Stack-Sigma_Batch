function validateURL(url) {
    const regex =
        /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/gim;

    if (regex.test(url)) {
        console.log("The input URL matches the conditions.");
    } else {
        console.log("The input URL does not match the conditions.");
    }
}

validateURL("http://www.example.com");
validateURL("https://example.com");
validateURL("ftp://example.com");
validateURL("http://example");
validateURL("https://12345.com");
