function filterByCategory(products) {
    this.products = products;
    return function filterCategory(category) {
        this.category = category;
        return products.filter((product) => product.category == category);
    };
}

const products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pant", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
];

const clothingProducts = filterByCategory(products)("Clothing");

console.log(clothingProducts);
