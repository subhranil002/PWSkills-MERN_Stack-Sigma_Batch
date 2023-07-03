function getPerson(person) {
    const personname = person.name;
    const personage = person.age;
    try {
        if (
            typeof person == "object" &&
            isNaN(personname) == true &&
            isNaN(personage) == false
        ) {
            return `Name: ${person.name}, Age: ${person.age}`;
        } else throw new Error();
    } catch {
        return "Invalid Parameter Type";
    }
}

console.log(getPerson({ name: "Mithun", age: 20 }));
