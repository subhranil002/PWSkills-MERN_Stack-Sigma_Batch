// Array Initializing Without Values -->
let b = new Array();

console.log(b); // []

let bc = new Array(5);

console.log(bc); // [ <5 empty items> ]

// Array Initializing With Values -->
let arr = [1, 2, 4, 5, "Subhranil", true];

console.log(arr); // [ 1, 2, 4, 5, 'Subhranil', true ]

let brr = new Array(1, 2, 4, 5, "Subhranil", true);

console.log(brr); // [ 1, 2, 4, 5, 'Subhranil', true ]

// Accessing Array Elements -->
console.log(bc[3]); // undefined

console.log(arr[4]); // Subhranil

console.log(brr[2]); // 4

arr[4] = "PWSkills";
console.log(arr[4]); // PWSkills