function createPromise() {
    return new Promise(function executerCallback(resolve, reject) {
        setTimeout(function f() {
            console.log("timer done");
            resolve("done"); // If you want value in "then" section
            // reject("failed") // If you want value in "catch" section
        }, 3000);
    });
}

console.log("start");

let x = createPromise();

console.log("got a new promise");

x.then(function f() {
    console.log("promise done"); // will print if "resolve" is called
}).catch(function g(value) {
    console.log("handeled",value); // will print if "reject" is called
}).finally(function fn() {
    console.log("finally"); // always prints
})

console.log("end");
