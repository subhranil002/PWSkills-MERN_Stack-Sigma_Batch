let emptySet = new Set();

console.log(emptySet.size); // 0

let myArray = [1, 2, 3, 4];
let newSet = new Set(myArray);

console.log(newSet); // Set(4) { 1, 2, 3, 4 }

myArray = [1, 2, 3, 4, 5, 3, 2];
newSet = new Set(myArray);

console.log(newSet); // Set(5) { 1, 2, 3, 4, 5 }

newSet.add(2);
console.log(newSet); // Set(5) { 1, 2, 3, 4, 5 }

newSet.add(9);
console.log(newSet); // Set(6) { 1, 2, 3, 4, 5, 9 }

console.log(newSet.has(9)); // true

newSet.clear();
console.log(newSet); // Set(0) {}
