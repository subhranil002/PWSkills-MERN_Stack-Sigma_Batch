function  CelsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit
} 

let celsius = 39.6;
let fahrenheit = CelsiusToFahrenheit(celsius);
console.log(fahrenheit);