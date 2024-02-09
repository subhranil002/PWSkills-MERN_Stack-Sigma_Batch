import { compose } from "redux";

function removeSpaces(string) {
    return string.split(" ").join("");
}

function repeatString(string) {
    return string.repeat(2);
}

function convertToUppercase(string) {
    return string.toUpperCase();
}

const input = "abc cde efg";

const output = convertToUppercase(repeatString(removeSpaces(input)));

console.log(output); // ABCCDEEFGABCCDEEFG

const composedFunction = compose(
    removeSpaces,
    repeatString,
    convertToUppercase
);

console.log(composedFunction(input)); // ABCCDEEFGABCCDEEFG
