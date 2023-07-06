function ageInDays(person, logresult) {
    const fname = person.firstName;
    const lname = person.lastName;
    const age = person.age * 365;
    
    return logresult(fname,lname,age)
}

function logresult(fname,lname,age) {
    return `The person's full name is ${fname+" "+lname} and their age in days is ${age} days`
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

console.log(ageInDays(person, logresult));
