// HOF Introduction
const powerTwo = (number) => {
    return number ** 2;
};

function powerCube(powerTwo, number) {
    return powerTwo(number) * number;
}

console.log(powerCube(powerTwo, 3)); // 27