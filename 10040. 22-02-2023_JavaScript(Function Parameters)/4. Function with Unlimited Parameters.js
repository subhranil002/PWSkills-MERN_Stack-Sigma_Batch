function sumOfAllParameters() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

let result = sumOfAllParameters(1, 2, 3, 4, 5, 6, 7);

console.log(result); // 28