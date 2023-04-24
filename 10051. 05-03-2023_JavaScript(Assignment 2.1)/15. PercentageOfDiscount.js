let precentageOfDiscount = (product) => {
    let discount = 100 - (product.discountedprice / product.orignalprice) * 100;
    return discount.toFixed(2);
}

let product1 = {orignalprice: 499, discountedprice: 399};
let discount = precentageOfDiscount(product1);
console.log(`Discount = ${discount}%`);