Object.prototype.Student = function (name) {
    this.name = name;
};

Student.prototype.printDetails = function () {
    console.log(`Hello, my name is ${this.name}`);
};

const student = new Student("Mithun");

student.printDetails();
