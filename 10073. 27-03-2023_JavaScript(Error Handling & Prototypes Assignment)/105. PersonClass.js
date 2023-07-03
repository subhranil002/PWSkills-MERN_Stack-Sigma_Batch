class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        if (this.name == undefined) this.name = "Unknown";
        if (this.age == undefined) this.age = 0;

        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person("Mithun", 20);

console.log(person1.getDetails());

const person2 = new Person();

console.log(person2.getDetails());
