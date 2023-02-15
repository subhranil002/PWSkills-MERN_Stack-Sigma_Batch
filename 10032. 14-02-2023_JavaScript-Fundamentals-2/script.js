
// If - Else
let signal = "Red"

// Condition 1
if (signal == "Red") {
    console.log("Red => Stop");
}
// Condition 2
else if (signal == "Yellow") {
    console.log("Yellow => Go Slow");
}
// Condition 3
else if (signal == "Green") {
    console.log("Green => Go Fast");
}
// Condition 4
else {
    console.log("Invalid");
}


// Switch Case
let user = "Admin"
switch (user) {
    case "Admin":
        console.log("He is a Admin");
        break;

    case "Student": 
        console.log("He is a Student");

    case "Mentor": 
        console.log("He is a Mentor"); 

    default:
        console.log("I am Default");
        break;
}


// Loops

// For
for (let i=1; i<=5; i++) {
    console.log(i);    
}

// While
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

// Do While
let k = 1;
do {
    console.log(k);
    k++;
} while (k >= 5);


// Ternary Operator / Ternary Condition
// ? true : false

let isLoggedIn = true;
isLoggedIn ? console.log("Home Page") : console.log("Login Page");