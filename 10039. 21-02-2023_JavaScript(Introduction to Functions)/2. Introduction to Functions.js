// Syntax --> 
/*
    To Create a Function -->
    
    function functionName() {
        // function body
    }

    To Call a Function -->

    functionName();
*/

function greet() {
    console.log("Hi there");
    console.log("How are you");
}

greet();


function sqr(x) { // x -> Parameter
    console.log(x*x);
}

sqr(5); // 5 -> Argument
// 25


function sqr(x) {
    return x*x;
}

let a = sqr(6);

console.log(a); // 36


