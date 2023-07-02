class Product {
    constructor(n, p, r) {
        console.log("calling the constructor");

        this.name = n;
        this.price = p;
        this.rating = r;
    }
}

const p = new Product("iphone", 100000, 5); // calling the constructor
console.log(p); // Product { name: 'iphone', price: 100000, rating: 5 }
