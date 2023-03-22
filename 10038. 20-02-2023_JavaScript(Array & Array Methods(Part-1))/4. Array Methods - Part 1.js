let arr = [1, 2, 3, 4, 5]

console.log(arr); // [ 1, 2, 3, 4, 5 ]

// To Add a Element at the Right End
arr.push(6);
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
arr.push(7, 8, 9);
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// To Remove a Element from the Right End
let pp = arr.pop();
console.log(pp); // 9
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
arr.pop();
arr.pop();
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

// To Remove a Element from the Left End
arr.shift();
console.log(arr); // [ 2, 3, 4, 5, 6 ]
let sft = arr.shift();
console.log(sft); // 2
console.log(arr); // [ 3, 4, 5, 6 ]

// To Add a Element at the Left End
arr.unshift(9);
console.log(arr); // [ 9, 3, 4, 5, 6 ]

// To Add Element Anywhere
// Syntax --> array.splice((After Which Index), (How Many Values Want To Remove), (Value That You Want To Add))
// arr.splice(2, 0, 11);
// console.log(arr); // [ 9, 3, 11, 4, 5, 6 ]
// arr.splice(2, 1, 11);
// console.log(arr); // [ 9, 3, 11, 5, 6 ]
// arr.splice(2, 2, 11);
// console.log(arr); // [ 9, 3, 11, 6 ]
arr.splice(2, 2, 11, 15);
console.log(arr); // [ 9, 3, 11, 15, 6 ]


let a1 = [1, 2, 3, 4];
let a2 = [3, 4, 5, 6];


// To Join 2 Arrays
let a3 = a1.concat(a2);
console.log(a3); // [ 1, 2, 3, 4, 3, 4, 5, 6 ]

// To Return a String of the Values of the Array
let s = a1.join();
console.log(s); // 1,2,3,4
let st = a1.join("");
console.log(st); // 1234
let str = a1.join("@");
console.log(str); // 1@2@3@4

// To Reverse a Array
a3.reverse();
console.log(a3); // [ 6, 5, 4, 3, 4, 3, 2, 1 ]

// To Return the Index of a Perticuler Value
console.log(a3.indexOf(5)); // 1
console.log(a3.indexOf(54)); // -1

// To Return a Perticuler Portion of a Array
console.log(a3.slice(2, 5)); // [ 4, 3, 4 ]