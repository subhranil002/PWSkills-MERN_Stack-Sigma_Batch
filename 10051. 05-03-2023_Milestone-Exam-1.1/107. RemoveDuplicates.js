function removeDuplicates(cartWithDuplicates) {
    let cartWithoutDuplicates = [];
    
    for (let item of cartWithDuplicates) {
        if (!cartWithoutDuplicates.includes(item)) {
            cartWithoutDuplicates.push(item);
        }
    }

    return cartWithoutDuplicates;
}

let cartWithDuplicates = [1, 5, 6, 8, 1, 5, 4];
let cartWithoutDuplicates = removeDuplicates(cartWithDuplicates);
console.log(cartWithoutDuplicates);