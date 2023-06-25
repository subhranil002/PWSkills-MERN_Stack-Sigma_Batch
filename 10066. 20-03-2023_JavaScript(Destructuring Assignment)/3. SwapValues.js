const x = 5;
const y = 10;

const swap = (...args) => {
    let arr = args;
    return arr.reverse();
};

console.log(swap(x, y));
