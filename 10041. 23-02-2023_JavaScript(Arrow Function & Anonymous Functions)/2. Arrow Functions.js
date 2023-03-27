// One Parameter and a Single Return Statement

const square = (x) => x * x ;
let Output1 = square(5);
console.log(Output1);

// Multiple Parameter and a Single Return Statement

const sumOfTwoNumbers = (x, y) => x + y ;
let Output2 = sumOfTwoNumbers(5, 6);
console.log(Output2);

// Multiple Statements in Function Expression

const sum = (x, y) => {
    console.log(`Adding ${x} and ${y}`);
    return x + y ;
}
let Output3 = sum(7, 8);
console.log(Output3);

// Returning an Object

const sumAndDifference = (x, y) => ({sum : x + y, difference : x - y});
let Output4 = sumAndDifference(14, 12);
console.log(Output4);
