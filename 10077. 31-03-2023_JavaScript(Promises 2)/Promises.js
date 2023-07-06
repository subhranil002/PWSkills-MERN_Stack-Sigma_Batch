function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = "🧀";
            console.log("here is cheese", cheese);
            resolve(cheese);
        }, 2000);
    });
}

function makeDough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese + "🫓";
            console.log("here is the dough", dough);
            resolve(dough);
        }, 2000);
    });
}

function bakePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + "🍕";
            console.log("here is the pizza", pizza);
            resolve(pizza);
        }, 2000);
    });
}

getCheese()
    .then((cheese) => {
        return makeDough(cheese);
    })
    .then((dough) => {
        return bakePizza(dough);
    })
    .then((pizza) => {
        console.log("got the pizza", pizza);
    })
    .catch((data) => {
        console.log("error occured", data);
    });
