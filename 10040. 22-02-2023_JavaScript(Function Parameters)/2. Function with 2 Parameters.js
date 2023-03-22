function add(x = 1, y = 1) { // Default Values Given
    return x+y;
}

console.log(add()); // 2 (Default Value + Default Value)
console.log(add(5)); // 6 (5 + Default Value)
console.log(add(5,8)); // 13 (5 + 8)