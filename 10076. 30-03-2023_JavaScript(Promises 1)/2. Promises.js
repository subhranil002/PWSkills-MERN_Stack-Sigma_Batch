const ticket = new Promise(function (resolve, reject) {
    const isBorded = false;
    if (isBorded) {
        resolve("You are in the flight");
    } else {
        reject("Your flight has been cancelled");
    }
});

ticket
    .then((data) => {
        console.log("wohoo", data);
    })
    .catch((data) => {
        console.log("oh no", data);
    })
    .finally(() => {
        console.log("i will always be executed");
    });
