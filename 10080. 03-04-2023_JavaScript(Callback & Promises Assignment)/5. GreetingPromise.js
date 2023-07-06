function greetPromise(name) {
    return new Promise(function (resolve) {
        const greet = `Hello ${name}`;
        resolve(greet);
    });
}

greetPromise("Mithun").then((greet) => {
    console.log(greet);
});
