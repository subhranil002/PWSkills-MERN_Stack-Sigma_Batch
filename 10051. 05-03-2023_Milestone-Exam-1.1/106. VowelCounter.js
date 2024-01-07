let names = "Subhranil";
let vowelcount = 0;

for (let i = 0 ; i < names.length; i++) {
    let x = names[i].toLowerCase();
    if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
        vowelcount++;
    }
}

console.log(`Vowel Count = ${vowelcount}`);