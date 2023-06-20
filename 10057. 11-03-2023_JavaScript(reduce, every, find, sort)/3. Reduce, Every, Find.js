// Reduce

const cartBill = [20, 30, 50];

const sumOfCartBill = cartBill.reduce((prev, curr) => prev + curr, 0);

console.log(sumOfCartBill); // 100


// Every


const gameScore = [200, 300, 310, 250, 150];

const gameScoreCheck = gameScore.every((v) => typeof v === "number");

console.log(gameScoreCheck); // true


// Find


const above200 = gameScore.find((score) => score > 200); // "find" returns only the first element found which is matching the condition

console.log(above200); // 300