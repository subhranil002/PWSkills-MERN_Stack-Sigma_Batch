function sayHello() {
    return () => {
        console.log("Hello Subhranil");
    };
}

let guessValue = sayHello();
console.log(guessValue); // [Function (anonymous)]
guessValue(); // Hello Subhranil

const higherOrder = (n) => {
    const oneFun = (m) => {
        const twoFun = (p) => {
            return m + n + p;
        };
        return twoFun;
    };
    return oneFun;
};

// How to run
console.log(higherOrder(2)(3)(4)); // 9/


const myNums = [2, 3, 4, 5];
const sumArray = (arr) => {
    let total = 0;
    arr.forEach(function (element) {
        total += element;
    });
    return total;
};

console.log(sumArray(myNums)); // 14

