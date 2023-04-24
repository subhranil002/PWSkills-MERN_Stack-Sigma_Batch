function calculateTotalBill(cost, numerofpeople) {
    let totalbill = 0;

    for (let item of cost) {
        totalbill += item;
    }

    let ammountperhead = totalbill / numerofpeople;
    return {totalbill: totalbill, ammountperhead: ammountperhead};
}

let cost = [55, 122, 89, 76, 58];
let numerofpeople = 4;

let finaldetails = calculateTotalBill(cost, numerofpeople);
console.log(finaldetails);