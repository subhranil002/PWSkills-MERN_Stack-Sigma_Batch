let emp = {
    id : 101,
    name : "Subhranil",
    age : 19
};

// To Fetch Only Keys & Values in an Array Format
let keyArray = Object.keys(emp);
console.log(keyArray); // [ 'id', 'name', 'age' ]

let valueArray = Object.values(emp);
console.log(valueArray); // [ 101, 'Subhranil', 19 ]

let entrieArray = Object.entries(emp);
console.log(entrieArray); // [ [ 'id', 101 ], [ 'name', 'Subhranil' ], [ 'age', 19 ] ]


// To Freeze Updates & Entries & Deletion In a Object
// Object.freeze(emp);
//console.log(emp); // { id: 101, name: 'Subhranil', age: 19 }
//emp.id = 501;
//emp.Address = "Random";
//delete emp.name
//console.log(emp); // { id: 101, name: 'Subhranil', age: 19 }


// To Freeze Only Entries & Deletion In a Object
//Object.seal(emp)
//console.log(emp); // { id: 101, name: 'Subhranil', age: 19 }
//emp.id = 501;
//emp.Address = "Random";
//delete emp.name
//console.log(emp); // { id: 501, name: 'Subhranil', age: 19 }


// To Copy Existing Object Values to a New Object
let o = Object.assign({}, emp);
console.log(o); // { id: 101, name: 'Subhranil', age: 19 }
let op = Object.assign({x:16}, emp);
console.log(op); // { x: 16, id: 101, name: 'Subhranil', age: 19 }