const a = [1, 2, 3, 4];
const b = [5, 6, 7, 8];

const c = a.concat(b);
console.log(c); // [1, 2, 3, 4, 5, 6, 7, 8];

const d = [a, b];
console.log(d); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]

const e = [...a, ...b];
console.log(e); // [1, 2, 3, 4, 5, 6, 7, 8];
