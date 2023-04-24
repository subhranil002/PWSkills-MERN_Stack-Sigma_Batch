function calculator(num1, num2 , operator) {
    switch (operator) {
        case "+":
            return (num1 + num2);
            break;
        case "-":
            return (num1 - num2);
            break;
        case "*":
            return (num1 * num2);
            break;
        case "/":
            return (num1 / num2);
            break;
    
        default:
            console.log("Invalid operator");
            break;
    }
}

let num1 = 9;
let num2 = 7;
let operator = "**"
let result = calculator(num1, num2, operator);