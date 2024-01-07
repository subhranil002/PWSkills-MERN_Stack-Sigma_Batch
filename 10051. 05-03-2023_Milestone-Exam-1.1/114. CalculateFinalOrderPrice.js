let calculateFinalOrderPrice = (cart) => {
    let totalcost = 0;

    for(let i = 0; i < cart.length; i++) {
        totalcost += (cart[i].unitprice * cart[i].quantity);
    }

    return totalcost;
}

let potato = {unitprice: 18, quantity: 5};
let tomato = {unitprice: 30, quantity: 1};
let carrot = {unitprice: 40, quantity: 2};

let cart = [potato, tomato, carrot];
let totalcost = calculateFinalOrderPrice(cart);
console.log(totalcost);