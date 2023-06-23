const store = {
    item1: 10,
    item2: 15,
    item3: 20,
    item4: 30,
    item5: 35,
};

const exchangeRate = 80;

const newCost = Object.entries(store).map(([item, price]) => [
    item,
    price * exchangeRate,
]);

console.log(newCost);
