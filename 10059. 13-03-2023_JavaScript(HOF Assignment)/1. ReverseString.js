let input = "Subhranil is a lier";

let reverseSting = (str) => {
    let reversed = str.split("").reverse().join("");
    console.log(reversed);
};

setTimeout(() => {
    reverseSting(input);
}, 2000);