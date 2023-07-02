class Product {
    names = "undo"; // Public
    #rating = 4.5; // Private

    get ratingGetter() {
        console.log(this.#rating);
    }

    set ratingSetter(r) {
        if (r < 0) return;
        this.#rating = r;
    }
}

const p = new Product();

p.ratingSetter = 10
p.ratingGetter; // 10
