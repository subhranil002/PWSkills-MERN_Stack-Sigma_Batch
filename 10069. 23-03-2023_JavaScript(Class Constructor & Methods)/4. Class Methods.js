class Product {
    names = "undo"; // Public
    #rating = 4.5; // Private

    static custom() {
        console.log("calling a static method");
    }

    private() {
        console.log(this.names, this.#rating);
    }

    display() {
        console.log("displaying the current product");
    }
}

const p = new Product();

p.display(); // displaying the current product

p.custom(); // TypeError: p.custom is not a function

Product.custom(); // calling a static method

console.log(p.names); // undo
console.log(p.rating); // undefined
// console.log(p.#rating); // SyntaxError: Private field '#rating' must be declared in an enclosing class

p.names = "subh";
p.rating = 10;
p.private(); // subh 4.5
