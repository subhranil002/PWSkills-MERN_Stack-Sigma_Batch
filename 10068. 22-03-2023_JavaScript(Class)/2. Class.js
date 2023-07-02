class Product {
    // properties -> variables -> data members

    name;
    price;
    rating;
    
    // behaviours -> functions -> menber functions

    display() {
        console.log("displaying the current product");
    }
}

const p = new Product();
console.log(p); // Product { name: undefined, price: undefined, rating: undefined }

p.display(); // displaying the current product