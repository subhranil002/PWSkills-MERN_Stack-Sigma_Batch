const numbers = [5, 2, 7, 1, 9];
const map = new Map();

const maxMin = (numbers) => {
    map.set("Max", Math.max(...numbers));
    map.set("Min", Math.min(...numbers));
};

maxMin(numbers);
console.log(map);
