// Regex

let pattern = "regex";

let regExOne = new RegExp(pattern);

let flag = "gi";

let regExTwo = new RegExp(pattern, flag);

let regExThree = /regex/gi;

const strToCheck =
    "What is regex and Different Character in Regex and importance Writting regex with example";

const result1 = regExThree.test(strToCheck);

console.log(result1); // true

const anotherResult1 = strToCheck.match(regExThree);

console.log(anotherResult1); // [ 'regex', 'Regex', 'regex' ]

regExThree = /regex/g;

const anotherResult2 = strToCheck.match(regExThree);

console.log(anotherResult2); // [ 'regex', 'regex' ]

const oneMoreResult = strToCheck.replace(regExThree, "pwSkills");

console.log(oneMoreResult); // What is pwSkills and Different Character in Regex and importance Writting pwSkills with example

const webUrl1 = "https://pwskills.com/subhranil%20chakraborty";

const webUrl2 = "https://pwskills.com/subhranil%30chakraborty";

let useableUrl = webUrl1.replace(/%20/, "-");

console.log(useableUrl1); // https://pwskills.com/subhranil-chakraborty

useableUrl = webUrl2.replace(/%30/, "-");

console.log(useableUrl); // https://pwskills.com/subhranil-chakraborty

useableUrl = webUrl1.replace(/%\d0/, "-");

console.log(useableUrl); // https://pwskills.com/subhranil-chakraborty

useableUrl = webUrl2.replace(/%\d0/, "-");

console.log(useableUrl); // https://pwskills.com/subhranil-chakraborty

