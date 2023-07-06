function h(x, fn) {
    console.log(x * x);
    fn();
    // h -> is HOF
    // fn -> callback
}

h(10, function () {
    console.log("done with callback");
});

// 100
// done with callback
