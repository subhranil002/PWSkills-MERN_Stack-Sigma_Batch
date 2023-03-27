// Method 1 -->
let obj = {id : 101, name : "Alex", salary : 10000};
console.log(obj); // { id: 101, name: 'Alex', salary: 10000 }

// Method 2 -->
let emp = new Object();
console.log(emp); // {}
emp.id = 102;
emp.name = "Sam";
emp['salary'] = 13000;
console.log(emp); // { id: 102, name: 'Sam', salary: 13000 }

// Method 3 -->
function emp2 (i, n, s) {
    this.id = i;
    this.name = n;
    this.salary = s;
}

let e = new emp2(103, "Amy", 12000);
console.log(e); // emp2 { id: 103, name: 'Amy', salary: 12000 }


// Accessing Object Values-->
console.log(obj.name); // Alex
console.log(emp.id); // 102
console.log(emp2.salary); // undefined
console.log(e.salary); // 12000
console.log(obj['id']); // 101


// To Delete a Key Value Pair -->
delete emp.id;
console.log(emp); // { name: 'Sam', salary: 13000 }
