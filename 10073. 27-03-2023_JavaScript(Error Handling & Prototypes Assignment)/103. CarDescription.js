class Car {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`
    }
}

const myCar = new Car("Scoda", "Rapid", 2022);

console.log(myCar.getDescription());