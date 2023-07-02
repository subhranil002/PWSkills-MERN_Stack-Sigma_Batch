// Not using Try and Catch

// let x = undefined;
// console.log(x[0]);
// console.log("end");

// TypeError: Cannot read properties of undefined (reading '0')

// Using Try and Catch

try {
    let x = undefined;
    console.log(x[0]);
} catch (error) {
    console.log("Error handling in catch" ,error);
} finally {
    console.log("Finally always gets executed");
}

console.log("end");

// Error handling in catch TypeError: Cannot read properties of undefined (reading '0')
// Finally always gets executed
// end
